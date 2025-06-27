import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kaan } from './kaan';

describe('Kaan', () => {
  let component: Kaan;
  let fixture: ComponentFixture<Kaan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kaan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kaan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
