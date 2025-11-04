import { Injectable } from '@angular/core';

const TIPS = [
  'Allenamento costante è meglio di quello intenso ma raro.',
  'Dai sempre acqua fresca al tuo cane durante l’allenamento.',
  'Premi piccoli e frequenti migliorano il comportamento.'
];

@Injectable({ providedIn: 'root' })
export class TipsService {
  random() {
    return TIPS[Math.floor(Math.random() * TIPS.length)];
  }
}
