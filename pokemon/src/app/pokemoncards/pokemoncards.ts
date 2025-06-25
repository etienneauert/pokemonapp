import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemoncards',
  imports: [],
  templateUrl: './pokemoncards.html',
  styleUrl: './pokemoncards.css'
})
export class Pokemoncards {
  pokemons = [
    { name: 'Darkrai', image: '/PokemonBilder/Darkrai_Bild.png', audio: '/PokemonAudio/Darkrai_Audio.mp3' },
    { name: 'Deoxys', image: '/PokemonBilder/Deoxys_Bild.png', audio: '/PokemonAudio/Deoxys_Audio.mp3' },
    { name: 'Genesect', image: '/PokemonBilder/Genesect_Bild.png', audio: '/PokemonAudio/Genesect_Audio.mp3' },
    { name: 'Infamomo', image: '/PokemonBilder/Infamomo_Bild.png', audio: '/PokemonAudio/Infamomo_Audio.mp3' },
    { name: 'Marshadow', image: '/PokemonBilder/Marshadow_Bild.png', audio: '/PokemonAudio/Marshadow_Audio.mp3' },
    { name: 'Mew', image: '/PokemonBilder/Mew_Bild.png', audio: '/PokemonAudio/Mew_Audio.mp3' },
    { name: 'Volcanion', image: '/PokemonBilder/Volcanion_Bild.png', audio: '/PokemonAudio/Volcanion_Audio.mp3' }
  ];

  selectedPokemon: any = null;
  showModal = false;

  onPokemonClick(pokemonName: string) {
    this.selectedPokemon = this.pokemons.find(p => p.name === pokemonName);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPokemon = null;
  }

  playSound() {
    if (this.selectedPokemon?.audio) {
      const audio = new Audio(this.selectedPokemon.audio);
      audio.play();
    }
  }
}
