import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeCog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    containerRef.current.appendChild(renderer.domElement);

    // --- Environment for metallic reflections ---
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
    });
    const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
    scene.add(cubeCamera);

    // --- Procedural Textures ---
    const makeBrushedMetal = (baseColor: string) => {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 512;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 4000; i++) {
        const b = 100 + Math.random() * 100;
        ctx.strokeStyle = `rgba(${b},${b},${b},${0.04 + Math.random() * 0.07})`;
        ctx.lineWidth = 0.4 + Math.random() * 1.2;
        const y = Math.random() * 512;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(512, y);
        ctx.stroke();
      }
      for (let i = 0; i < 200; i++) {
        ctx.strokeStyle = `rgba(0,0,0,${0.05 + Math.random() * 0.12})`;
        ctx.lineWidth = 0.3 + Math.random() * 0.6;
        const x = Math.random() * 512,
          y = Math.random() * 512;
        const len = 8 + Math.random() * 50;
        const ang = Math.random() * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
        ctx.stroke();
      }
      const rg = ctx.createRadialGradient(256, 256, 100, 256, 256, 400);
      rg.addColorStop(0, "rgba(0,0,0,0)");
      rg.addColorStop(1, "rgba(0,0,0,0.25)");
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, 512, 512);
      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      return tex;
    };

    const makeRoughness = () => {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#777";
      ctx.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 2000; i++) {
        const v = 80 + Math.random() * 120;
        ctx.strokeStyle = `rgba(${v},${v},${v},0.12)`;
        ctx.lineWidth = 0.8 + Math.random() * 2;
        const y = Math.random() * 256;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(256, y);
        ctx.stroke();
      }
      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      return tex;
    };

    const steelAlbedo = makeBrushedMetal("#8a8a8a");
    const goldAlbedo = makeBrushedMetal("#b8820a");
    const roughTex = makeRoughness();

    // --- Materials ---
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      metalness: 0.92,
      roughness: 0.38,
      map: steelAlbedo,
      roughnessMap: roughTex,
      envMap: cubeRenderTarget.texture,
      envMapIntensity: 1.8,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc8820a,
      metalness: 0.95,
      roughness: 0.22,
      map: goldAlbedo,
      roughnessMap: roughTex,
      envMap: cubeRenderTarget.texture,
      envMapIntensity: 2.2,
      emissive: 0xc8820a,
      emissiveIntensity: 0.08,
    });

    const darkSteelMat = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.95,
      roughness: 0.5,
      envMap: cubeRenderTarget.texture,
      envMapIntensity: 1.2,
    });

    // --- Gear Shape Builder ---
    const buildGearShape = (
      outerR: number,
      teeth: number,
      toothH: number,
      innerR: number,
      spokeCount: number,
      spokeW: number,
    ) => {
      const shape = new THREE.Shape();
      const step = (Math.PI * 2) / teeth;
      for (let i = 0; i < teeth; i++) {
        const a = i * step;
        const na = (i + 1) * step;
        shape.lineTo(Math.cos(a) * outerR, Math.sin(a) * outerR);
        shape.lineTo(
          Math.cos(a + step * 0.18) * (outerR + toothH),
          Math.sin(a + step * 0.18) * (outerR + toothH),
        );
        shape.lineTo(
          Math.cos(a + step * 0.82) * (outerR + toothH),
          Math.sin(a + step * 0.82) * (outerR + toothH),
        );
        shape.lineTo(Math.cos(na) * outerR, Math.sin(na) * outerR);
      }
      shape.closePath();
      for (let i = 0; i < spokeCount; i++) {
        const a = (i / spokeCount) * Math.PI * 2 + Math.PI / spokeCount;
        const dist = (outerR + innerR) / 2 + spokeW * 0.2;
        const hole = new THREE.Path();
        hole.absarc(
          Math.cos(a) * dist,
          Math.sin(a) * dist,
          spokeW,
          0,
          Math.PI * 2,
          true,
        );
        shape.holes.push(hole);
      }
      const center = new THREE.Path();
      center.absarc(0, 0, innerR, 0, Math.PI * 2, true);
      shape.holes.push(center);
      return shape;
    };

    const extrudeOpts = (d: number) => ({
      depth: d,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.08,
      bevelSegments: 8,
    });

    // --- Three interlocking gears ---
    // Large gear: 20 teeth, pitch radius 3.2
    const largeShape = buildGearShape(3.2, 20, 0.42, 0.72, 6, 0.28);
    const largeGeo = new THREE.ExtrudeGeometry(largeShape, extrudeOpts(0.55));
    largeGeo.computeVertexNormals();
    const largeGear = new THREE.Mesh(largeGeo, steelMat);
    largeGear.position.set(0, 0, 0);

    const axleL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 1.4, 24),
      darkSteelMat,
    );
    axleL.rotation.x = Math.PI / 2;
    axleL.position.z = 0.28;

    // Medium gear: 12 teeth, pitch radius 1.92 — top-right
    // Mesh point: center-dist = 3.2 + 1.92 = 5.12, at ~45°
    const medShape = buildGearShape(1.92, 12, 0.34, 0.45, 4, 0.2);
    const medGeo = new THREE.ExtrudeGeometry(medShape, extrudeOpts(0.48));
    medGeo.computeVertexNormals();
    const medGear = new THREE.Mesh(medGeo, goldMat);
    const medX = 3.62,
      medY = 3.55;
    medGear.position.set(medX, medY, 0.04);

    const axleM = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 1.1, 24),
      darkSteelMat,
    );
    axleM.rotation.x = Math.PI / 2;
    axleM.position.set(medX, medY, 0.28);

    // Small gear: 8 teeth, pitch radius 1.28 — bottom-right
    const smShape = buildGearShape(1.28, 8, 0.28, 0.32, 4, 0.14);
    const smGeo = new THREE.ExtrudeGeometry(smShape, extrudeOpts(0.42));
    smGeo.computeVertexNormals();
    const smGear = new THREE.Mesh(smGeo, steelMat);
    const smX = 3.62,
      smY = -3.2;
    smGear.position.set(smX, smY, 0.06);

    const axleS = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 1.0, 24),
      darkSteelMat,
    );
    axleS.rotation.x = Math.PI / 2;
    axleS.position.set(smX, smY, 0.28);

    // Connecting bracket (decorative structural rod)
    const bracketCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(medX, medY, 0.28),
      new THREE.Vector3(smX, smY, 0.28),
    ]);
    const bracket = new THREE.Mesh(
      new THREE.TubeGeometry(bracketCurve, 12, 0.055, 8, false),
      darkSteelMat,
    );

    // Gold accent collars on each axle
    const collar = (r: number, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.06, 12, 60),
        goldMat,
      );
      m.rotation.x = Math.PI / 2;
      m.position.set(x, y, z);
      return m;
    };

    // Assembly
    const assembly = new THREE.Group();
    assembly.add(largeGear, axleL);
    assembly.add(medGear, axleM);
    assembly.add(smGear, axleS);
    assembly.add(bracket);
    assembly.add(collar(0.28, 0, 0, 0.62));
    assembly.add(collar(0.28, 0, 0, -0.08));
    assembly.add(collar(0.18, medX, medY, 0.58));
    assembly.add(collar(0.14, smX, smY, 0.54));

    assembly.position.set(-1.5, -0.2, 0);
    scene.add(assembly);

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const key = new THREE.DirectionalLight(0xffffff, 3.5);
    key.position.set(8, 10, 12);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xfff5cc, 1.2);
    fill.position.set(-10, -5, 8);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffffff, 2.0);
    rim.position.set(-6, 6, -10);
    scene.add(rim);

    const top = new THREE.DirectionalLight(0xffe8aa, 1.8);
    top.position.set(0, 12, 4);
    scene.add(top);

    // Subtle warm gold point light
    const warmPt = new THREE.PointLight(0xc8820a, 10, 20);
    warmPt.position.set(2, -4, 7);
    scene.add(warmPt);

    // Bake env
    cubeCamera.position.set(0, 0, 0);
    cubeCamera.update(renderer, scene);

    // --- Physically correct gear ratios ---
    const BASE = 0.006;
    const largeSpeed = -BASE;
    const medSpeed = BASE * (20 / 12);
    const smSpeed = BASE * (20 / 8);

    let mouseX = 0,
      mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouse);

    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      largeGear.rotation.z += largeSpeed;
      medGear.rotation.z -= medSpeed;
      smGear.rotation.z -= smSpeed;

      // Gentle float
      assembly.position.y = -0.2 + Math.sin(time * 0.55) * 0.1;

      // Mouse parallax
      assembly.rotation.y = THREE.MathUtils.lerp(
        assembly.rotation.y,
        mouseX * 0.35,
        0.04,
      );
      assembly.rotation.x = THREE.MathUtils.lerp(
        assembly.rotation.x,
        -mouseY * 0.25,
        0.04,
      );

      // Orbiting warm light
      warmPt.position.x = Math.sin(time * 0.4) * 6;
      warmPt.position.z = Math.cos(time * 0.4) * 6 + 4;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);

      // 1. Dispose Geometries
      largeGeo.dispose();
      medGeo.dispose();
      smGeo.dispose();
      bracket.geometry.dispose();

      // 2. Dispose Materials
      steelMat.dispose();
      goldMat.dispose();
      darkSteelMat.dispose();

      // 3. Dispose Textures
      steelAlbedo.dispose();
      goldAlbedo.dispose();
      roughTex.dispose();
      cubeRenderTarget.dispose();

      // 4. Dispose Renderer
      renderer.dispose();

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[600px] cursor-crosshair"
    />
  );
};

export default ThreeCog;
