import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';          // ✅ import giusto
import { RouterLink } from '@angular/router';
import { BreedsService } from '../../core/breeds';

@Component({
  standalone: true,
  selector: 'app-breeds',
  imports: [NgFor, NgIf, FormsModule, RouterLink],     // ✅ ora valido
  templateUrl: './breeds.html',
  styleUrl: './breeds.css'
})
export class Breeds {
  constructor(public svc: BreedsService) {}

  ngOnInit() {
    this.svc.loadWithDelay(600);
  }

  reset() {
    this.svc.query.set('');
    this.svc.size.set('tutte' as any);
    this.svc.energy.set(0);
    this.svc.hypo.set('any' as any);
    const el = document.getElementById('searchBox') as HTMLInputElement | null;
    el?.focus();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(ev: KeyboardEvent) {
    if (ev.key === '/' && !(ev.target as HTMLElement)?.matches('input,textarea')) {
      ev.preventDefault();
      const el = document.getElementById('searchBox') as HTMLInputElement | null;
      el?.focus();
    }
  }
}
