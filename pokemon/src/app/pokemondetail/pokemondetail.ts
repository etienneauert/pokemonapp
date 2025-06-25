import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemondetail',
  imports: [],
  templateUrl: './pokemondetail.html',
  styleUrl: './pokemondetail.css'
})
export class Pokemondetail implements OnInit {
  selectedPokemon: any = null;
  pokemons = [
    { name: 'Mew', image: '/PokemonBilder/Mew_Bild.png', audio: '/PokemonAudio/Mew_Audio.mp3', class: 'Mew-Deoxys', type: 'Psycho', pokedex: '151', color: 'rosa', category: 'Neue Art-Pokémon', size: '0,4m', weight: '4,0 Kg' },
    { name: 'Celebi', image: '/PokemonBilder/Celebi_Bild.png', audio: '/PokemonAudio/Celebi_Audio.mp3', type: 'Psycho/Pflanze', pokedex: '251', color: 'grün', category: 'Zeitreise-Pokémon', size: '0,6m', weight: '5,0 Kg' },
    { name: 'Deoxys', image: '/PokemonBilder/Deoxys/Deoxys_Bild.png', audio: '/PokemonAudio/Deoxys_Audio.mp3', class: 'Mew-Deoxys', type: 'Psycho', pokedex: '386', color: 'rot', category: 'DNS-Pokémon', size: '1,7m', weight: '60,8 Kg' },
    { name: 'Jirachi', image: '/PokemonBilder/Jirachi_Bild.png', audio: '/PokemonAudio/Jirachi_Audio.mp3', type: 'Stahl/Psycho', pokedex: '385', color: 'gelb', category: 'Wunsch-Pokémon', size: '0,3m', weight: '1,1 Kg' },
    { name: 'Phione', image: '/PokemonBilder/Phione_Bild.png', audio: '/PokemonAudio/Phione_Audio.mp3', type: 'Wasser', pokedex: '489', color: 'blau', category: 'Seeprinz-Pokémon', size: '0,4m', weight: '3,1 Kg' },
    { name: 'Manaphy', image: '/PokemonBilder/Manaphy_Bild.png', audio: '/PokemonAudio/Manaphy_Audio.mp3', type: 'Wasser', pokedex: '490', color: 'blau', category: 'Seeprinz-Pokémon', size: '0,3m', weight: '1,4 Kg' },
    { name: 'Darkrai', image: '/PokemonBilder/Darkrai_Bild.png', audio: '/PokemonAudio/Darkrai_Audio.mp3', type: 'Unlicht', pokedex: '491', color: 'schwarz', category: 'Finsternacht-Pokémon', size: '1,5m', weight: '50,5 Kg' },
    { name: 'Arceus', image: '/PokemonBilder/Arceus_Bild.png', audio: '/PokemonAudio/Arceus_Audio.mp3', type: 'Normal', pokedex: '493', color: 'weiß', category: 'Alpha-Pokémon', size: '3,2m', weight: '320,0 Kg' },
    { name: 'Victini', image: '/PokemonBilder/Victini_Bild.png', audio: '/PokemonAudio/Victini_Audio.mp3', type: 'Psycho/Feuer', pokedex: '494', color: 'gelb', category: 'Sieg-Pokémon', size: '0,4m', weight: '4,0 Kg' },
    { name: 'Keldeo', image: '/PokemonBilder/Keldeo/Keldeo_Bild.png', audio: '/PokemonAudio/Keldeo_Audio.mp3', type: 'Wasser/Kampf', pokedex: '647', color: 'gelb', category: 'Jungpferd-Pokémon', size: '1,4m', weight: '48,5 Kg' },
    { name: 'Genesect', image: '/PokemonBilder/Genesect_Bild.png', audio: '/PokemonAudio/Genesect_Audio.mp3', type: 'Käfer/Stahl', pokedex: '649', color: 'violett', category: 'Paläozoikum-Pokémon', size: '1,5m', weight: '82,5 Kg' },
    { name: 'Diancie', image: '/PokemonBilder/Diancie/Diancie_Bild.png', audio: '/PokemonAudio/Diancie_Audio.mp3', type: 'Gestein/Fee', pokedex: '719', color: 'rosa', category: 'Juwel-Pokémon', size: '0,7m', weight: '8,8 Kg' },
    { name: 'Hoopa', image: '/PokemonBilder/Hoopa/Hoopa_Bild.png', audio: '/PokemonAudio/Hoopa_Audio.mp3', type: 'Psycho/Geist', pokedex: '720', color: 'violett', category: 'Schabernack-Pokémon', size: '0,5m', weight: '9,0 Kg' },
    { name: 'Volcanion', image: '/PokemonBilder/Volcanion_Bild.png', audio: '/PokemonAudio/Volcanion_Audio.mp3', type: 'Feuer/Wasser', pokedex: '721', color: 'braun', category: 'Dampf-Pokémon', size: '1,7m', weight: '195,0 Kg' },
    { name: 'Magearna', image: '/PokemonBilder/Magearna/Magearna_Bild.png', audio: '/PokemonAudio/Magearna_Audio.mp3', type: 'Stahl/Fee', pokedex: '801', color: 'grau', category: 'Kunstwerk-Pokémon', size: '1,0m', weight: '80,5 Kg' },
    { name: 'Marshadow', image: '/PokemonBilder/Marshadow_Bild.png', audio: '/PokemonAudio/Marshadow_Audio.mp3', type: 'Kampf/Geist', pokedex: '802', color: 'grau', category: 'Schattenlauer-Pokémon', size: '0,7m', weight: '22,2 Kg' },
    { name: 'Zeraora', image: '/PokemonBilder/Zeraora_Bild.png', audio: '/PokemonAudio/Zeraora_Audio.mp3', type: 'Elektro', pokedex: '807', color: 'gelb', category: 'Donnerkrallen-Pokémon', size: '1,5m', weight: '44,5 Kg' },
    { name: 'Melmetal', image: '/PokemonBilder/Melmetal/Melmetal_Bild.png', audio: '/PokemonAudio/Melmetal_Audio.mp3', type: 'Stahl', pokedex: '809', color: 'grau', category: 'Bolzenmutter-Pokémon', size: '2,5m', weight: '800,0 Kg' },
    { name: 'Zarude', image: '/PokemonBilder/Zarude/Zarude_Bild.png', audio: '/PokemonAudio/Zarude_Audio.mp3', type: 'Unlicht/Pflanze', pokedex: '893', color: 'grün', category: 'Schlingaffe-Pokémon', size: '1,8m', weight: '70,0 Kg' },
    { name: 'Infamomo', image: '/PokemonBilder/Infamomo_Bild.png', audio: '/PokemonAudio/Infamomo_Audio.mp3', type: 'Feuer/Geist', pokedex: '1025', color: 'grün', category: 'Beerdigung-Pokémon', size: '1,5m', weight: '38,0 Kg' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if (pokemonName) {
      this.selectedPokemon = this.pokemons.find(p => p.name === pokemonName);
      if (!this.selectedPokemon) {
        // Pokemon nicht gefunden, zurück zur Übersicht
        this.router.navigate(['/pokemoncards']);
      }
    } else {
      // Kein Pokemon ausgewählt, zurück zur Übersicht
      this.router.navigate(['/pokemoncards']);
    }
  }

  playSound() {
    if (this.selectedPokemon?.audio) {
      const audio = new Audio(this.selectedPokemon.audio);
      audio.play();
    }
  }

  goBack() {
    this.router.navigate(['/pokemoncards']);
  }
}
