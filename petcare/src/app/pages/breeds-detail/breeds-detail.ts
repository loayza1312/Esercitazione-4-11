import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { BreedsService } from '../../core/breeds';
import { Breed } from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-breeds-detail',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './breeds-detail.html',
  styleUrl: './breeds-detail.css'
})
export class BreedsDetail {
  breed: Breed | null = null;
  constructor(route: ActivatedRoute, svc: BreedsService){
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      this.breed = svc.getById(id);
} else {
  this.breed = null; // o gestisci il caso mancante
}
  }}
