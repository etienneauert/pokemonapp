import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemoncards',
  imports: [],
  templateUrl: './pokemoncards.html',
  styleUrl: './pokemoncards.css'
})
export class Pokemoncards {
  pokemons = [
    { name: 'Mew', image: '/PokemonBilder/Mew_Bild.png', audio: '/PokemonAudio/Mew_Audio.mp3' },
    { name: 'Celebi', image: '/PokemonBilder/Celebi_Bild.png', audio: '/PokemonAudio/Celebi_Audio.mp3' },
    { name: 'Deoxys', image: '/PokemonBilder/Deoxys/Deoxys_Bild.png', audio: '/PokemonAudio/Deoxys_Audio.mp3' },
    { name: 'Jirachi', image: '/PokemonBilder/Jirachi_Bild.png', audio: '/PokemonAudio/Jirachi_Audio.mp3' },
    { name: 'Phione', image: '/PokemonBilder/Phione_Bild.png', audio: '/PokemonAudio/Phione_Audio.mp3' },
    { name: 'Manaphy', image: '/PokemonBilder/Manaphy_Bild.png', audio: '/PokemonAudio/Manaphy_Audio.mp3' },
    { name: 'Darkrai', image: '/PokemonBilder/Darkrai_Bild.png', audio: '/PokemonAudio/Darkrai_Audio.mp3' },
    { name: 'Arceus', image: '/PokemonBilder/Arceus_Bild.png', audio: '/PokemonAudio/Arceus_Audio.mp3' },
    { name: 'Victini', image: '/PokemonBilder/Victini_Bild.png', audio: '/PokemonAudio/Victini_Audio.mp3' },
    { name: 'Keldeo', image: '/PokemonBilder/Keldeo/Keldeo_Bild.png', audio: '/PokemonAudio/Keldeo_Audio.mp3' },
    { name: 'Genesect', image: '/PokemonBilder/Genesect_Bild.png', audio: '/PokemonAudio/Genesect_Audio.mp3' },
    { name: 'Diancie', image: '/PokemonBilder/Diancie/Diancie_Bild.png', audio: '/PokemonAudio/Diancie_Audio.mp3' },
    { name: 'Hoopa', image: '/PokemonBilder/Hoopa/Hoopa_Bild.png', audio: '/PokemonAudio/Hoopa_Audio.mp3' },
    { name: 'Volcanion', image: '/PokemonBilder/Volcanion_Bild.png', audio: '/PokemonAudio/Volcanion_Audio.mp3' },
    { name: 'Magearna', image: '/PokemonBilder/Magearna/Magearna_Bild.png', audio: '/PokemonAudio/Magearna_Audio.mp3' },
    { name: 'Marshadow', image: '/PokemonBilder/Marshadow_Bild.png', audio: '/PokemonAudio/Marshadow_Audio.mp3' },
    { name: 'Zeraora', image: '/PokemonBilder/Zeraora_Bild.png', audio: '/PokemonAudio/Zeraora_Audio.mp3' },
    { name: 'Melmetal', image: '/PokemonBilder/Melmetal/Melmetal_Bild.png', audio: '/PokemonAudio/Melmetal_Audio.mp3' },
    { name: 'Zarude', image: '/PokemonBilder/Zarude/Zarude_Bild.png', audio: '/PokemonAudio/Zarude_Audio.mp3' },
    { name: 'Infamomo', image: '/PokemonBilder/Infamomo_Bild.png', audio: '/PokemonAudio/Infamomo_Audio.mp3' },
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
