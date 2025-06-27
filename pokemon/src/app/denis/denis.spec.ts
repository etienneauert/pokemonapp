import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Denis } from './denis';

describe('Denis', () => {
  let component: Denis;
  let fixture: ComponentFixture<Denis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Denis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
