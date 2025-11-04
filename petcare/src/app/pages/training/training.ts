import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TrainingService } from '../../core/training';
import { Level, TrainingPlan } from '../../core/models';

@Component({
  standalone: true,
  selector: 'app-training',
  // 👇 aggiungi DatePipe qui sotto!
  imports: [FormsModule, NgFor, DatePipe],
  templateUrl: './training.html',
  styleUrl: './training.css'
})
export class Training {
  level: Level = 'intermedio';
  intensity = 5;
  current: TrainingPlan | null = null;
  saved: TrainingPlan[] = [];

  constructor(private svc: TrainingService) {
    this.saved = this.svc.list();
  }

  generate() {
    this.current = this.svc.generate(this.level, this.intensity);
  }

  save() {
    if (!this.current) return;
    this.svc.save(this.current);
    this.saved = this.svc.list();
    alert('Piano salvato ✓');
  }
}
