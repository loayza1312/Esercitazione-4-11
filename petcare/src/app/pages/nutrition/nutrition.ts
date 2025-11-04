import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

interface FoodRow { rangeKg:string; puppy:string; adult:string; notes?:string; gf?:boolean; }

@Component({
  standalone: true,
  selector: 'app-nutrition',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './nutrition.html',
  styleUrl: './nutrition.css'
})
export class Nutrition{
  onlyGF = false;
  rows: FoodRow[] = [
    { rangeKg:'0–5',  puppy:'80–120g', adult:'60–90g', notes:'3 pasti', gf:true },
    { rangeKg:'6–15', puppy:'140–220g', adult:'110–180g', notes:'2 pasti', gf:false },
    { rangeKg:'16–30',puppy:'240–360g', adult:'190–300g', notes:'2 pasti', gf:true },
  ];
  get filtered(){ return this.onlyGF ? this.rows.filter(r => r.gf) : this.rows; }
}
