import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audi } from './audi';

describe('Audi', () => {
  let component: Audi;
  let fixture: ComponentFixture<Audi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Audi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Audi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
