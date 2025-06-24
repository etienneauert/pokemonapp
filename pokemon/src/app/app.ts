import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Pokemoncards } from './pokemoncards/pokemoncards';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Pokemoncards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pokemon';
}
