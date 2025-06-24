import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemoncards',
  imports: [],
  templateUrl: './pokemoncards.html',
  styleUrl: './pokemoncards.css'
})
export class Pokemoncards {
  pokemons = [
    { name: 'Darkrai', image: '/PokemonBilder/Darkrai_Bild.png' },
    { name: 'Deoxys', image: '/PokemonBilder/Deoxys_Bild.png' },
    { name: 'Genesect', image: '/PokemonBilder/Genesect_Bild.png' },
    { name: 'Infamomo', image: '/PokemonBilder/Infamomo_Bild.png' },
    { name: 'Marshadow', image: '/PokemonBilder/Marshadow_Bild.png' },
    { name: 'Mew', image: '/PokemonBilder/Mew_Bild.png' },
    { name: 'Volcanion', image: '/PokemonBilder/Volcanion_Bild.png' }
  ];
}
