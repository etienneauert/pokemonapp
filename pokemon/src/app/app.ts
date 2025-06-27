import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Pokemoncards } from './pokemoncards/pokemoncards';
import { Footer } from './footer/footer';
import { AudiComponent } from './audi/audi';
import { Denis } from './denis/denis';
import { Nils } from './nils/nils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Pokemoncards, Footer, AudiComponent, Denis, Nils],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pokemon';
}
