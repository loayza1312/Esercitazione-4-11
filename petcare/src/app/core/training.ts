import { Injectable } from '@angular/core';
import { Level, TrainingPlan } from './models';
import { StorageService } from './storage';

const LIB: Record<Level, string[]> = {
  principiante: ['Passeggiata 20min', 'Seduto/Rest 5min', 'Gioco morbido 10min'],
  intermedio: ['Corsa 15min', 'Richiamo 10min', 'Nosework base 10min'],
  avanzato: ['Interval 25min', 'Agility base 15min', 'Obedience 15min']
};

@Injectable({ providedIn: 'root' })
export class TrainingService {
  private KEY = 'petcare:plans';
  constructor(private store: StorageService) {}

  list(): TrainingPlan[] {
    return this.store.get<TrainingPlan[]>(this.KEY, []);
  }

  save(plan: TrainingPlan) {
    const all = this.list();
    all.unshift(plan);
    this.store.set(this.KEY, all.slice(0, 10));
  }

  generate(level: Level, intensity: number): TrainingPlan {
    const base = LIB[level];
    const mult = Math.max(1, Math.min(3, Math.round(intensity / 4)));
    const items = Array(mult).fill(0).flatMap(() => base);
    return {
      id: crypto.randomUUID(),
      level,
      intensity,
      items,
      createdAt: Date.now()
    };
  }
}
