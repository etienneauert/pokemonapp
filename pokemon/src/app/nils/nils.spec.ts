import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nils } from './nils';

describe('Nils', () => {
  let component: Nils;
  let fixture: ComponentFixture<Nils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nils);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
