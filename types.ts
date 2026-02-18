
export interface Program {
  id: string;
  title: string;
  category: 'Industrial' | 'Technology' | 'Ethics';
  description: string;
  features: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  imageUrl?: string;
}

export interface Objective {
  icon: React.ReactNode;
  title: string;
  description: string;
}
