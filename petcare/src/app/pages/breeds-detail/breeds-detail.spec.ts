import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsDetail } from './breeds-detail';

describe('BreedsDetail', () => {
  let component: BreedsDetail;
  let fixture: ComponentFixture<BreedsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
