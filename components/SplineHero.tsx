
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineHero: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative scale-110 md:scale-100">
      <Suspense fallback={
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[10px] font-black tracking-widest text-brand-gold uppercase">Initializing Nexus</span>
        </div>
      }>
        <Spline scene="https://prod.spline.design/OMwl75zujzpOhveu/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default SplineHero;
