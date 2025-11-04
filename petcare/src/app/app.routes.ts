import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Breeds } from './pages/breeds/breeds';
import { BreedsDetail } from './pages/breeds-detail/breeds-detail';
import { Training } from './pages/training/training';
import { Nutrition } from './pages/nutrition/nutrition';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home, title: 'PetCare – Home' },
  { path: 'razze', component: Breeds, title: 'Razze' },
  { path: 'razze/:id', component: BreedsDetail, title: 'Dettaglio Razza' },
  { path: 'allenamento', component: Training, title: 'Allenamento' },
  { path: 'alimentazione', component: Nutrition, title: 'Alimentazione' },
  { path: 'about', component: About, title: 'About' },
  { path: '**', redirectTo: '' }
];

