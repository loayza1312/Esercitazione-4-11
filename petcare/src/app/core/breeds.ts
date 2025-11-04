import { Injectable, signal, computed } from '@angular/core';
import { Breed, Size } from './models';

@Injectable({ providedIn: 'root' })
export class BreedsService {
  private all: Breed[] = [
    {
      id: 'amstaff',
      name: 'American Staffordshire Terrier',
      size: 'media',
      energy: 4,
      hypoallergenic: false,
      image: 'assest/amstaff.jpg',
      shortDesc: 'Socievole e atletico.',
      care: ['Allenamento quotidiano', 'Socializzazione']
    },
    {
      id: 'labrador',
      name: 'Labrador Retriever',
      size: 'grande',
      energy: 3,
      hypoallergenic: false,
      image: 'assest/golden.jpg',
      shortDesc: 'Amichevole, famigliare.',
      care: ['Attività moderata', 'Alimentazione bilanciata']
    },
    {
      id: 'barboncino',
      name: 'Barboncino',
      size: 'piccola',
      energy: 3,
      hypoallergenic: true,
      image: 'assest/barboncino.jpg',
      shortDesc: 'Intelligente e adatto in appartamento.',
      care: ['Toelettatura', 'Giochi mentali']
    }
  ];

  query = signal<string>('');
  size = signal<Size | 'tutte'>('tutte');
  energy = signal<number | 0>(0);
  hypo = signal<boolean | 'any'>('any');
  loading = signal<boolean>(false);

  filtered = computed<Breed[]>(() => {
    const q = this.query().toLowerCase().trim();
    const s = this.size();
    const e = this.energy();
    const h = this.hypo();

    return this.all.filter(b => {
      const okQ = !q || b.name.toLowerCase().includes(q);
      const okS = s === 'tutte' || b.size === s;
      const okE = e === 0 || b.energy === e;
      const okH = h === 'any' || b.hypoallergenic === h;
      return okQ && okS && okE && okH;
    });
  });

  async loadWithDelay(ms = 600) {
    this.loading.set(true);
    await new Promise(r => setTimeout(r, ms));
    this.loading.set(false);
  }

  getById(id: string) {
    return this.all.find(b => b.id === id) || null;
  }
}
