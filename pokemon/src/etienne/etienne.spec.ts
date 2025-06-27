import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etienne } from './etienne';

describe('Etienne', () => {
  let component: Etienne;
  let fixture: ComponentFixture<Etienne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etienne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etienne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
