export type Size = 'piccola' | 'media' | 'grande';

export interface Breed {
  id: string;
  name: string;
  size: Size;
  energy: 1 | 2 | 3 | 4 | 5;
  hypoallergenic: boolean;
  image: string;
  shortDesc: string;
  care: string[];
}

export type Level = 'principiante' | 'intermedio' | 'avanzato';

export interface TrainingPlan {
  id: string;
  level: Level;
  intensity: number;
  items: string[];
  createdAt: number;
}
