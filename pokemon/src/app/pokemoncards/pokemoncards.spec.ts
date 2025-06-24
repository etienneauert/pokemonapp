import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemoncards } from './pokemoncards';

describe('Pokemoncards', () => {
  let component: Pokemoncards;
  let fixture: ComponentFixture<Pokemoncards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokemoncards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokemoncards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
