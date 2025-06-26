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
    { name: 'Mew', image: '/PokemonBilder/Mew_Bild.png', audio: '/PokemonAudio/Mew_Audio.mp3', style: 'Mew-Deoxys', type: 'Psycho', pokedex: '151', color: 'rosa', category: 'Neue Art-Pokémon', size: '0,4m', weight: '4,0 Kg',info: 'Mew ist ein Mysteriöses Pokémon mit dem Typ Psycho und existiert seit der ersten Spielgeneration.<br>Im Anime taucht es zum ersten Mal in der Episode Zurück zu den Wurzeln! auf, aber auch in den Episoden Die Journalistin aus der Fremde! und Alola, Kanto! erscheint es.<br> Zudem ist es in den Specials Pokémon 3D Adventure: Mew o Sagase!, Das Superhirn der Mirage-Pokémon und Folge 4 – Glurak zu sehen. Auch in den Filmen Pokémon: Mewtu kehrt zurück, Pokémon – Der Film und Pokémon 8 – Lucario und das Geheimnis von Mew kommt es vor.' },
    { name: 'Celebi', image: '/PokemonBilder/Celebi_Bild.png', audio: '/PokemonAudio/Celebi_Audio.mp3', style: 'Celebi', type: 'Psycho/Pflanze', pokedex: '251', color: 'grün', category: 'Zeitreise-Pokémon', size: '0,6m', weight: '5,0 Kg',info: 'Celebi ist ein Mysteriöses Pokémon mit den Typen Psycho und Pflanze und existiert seit der zweiten Spielgeneration. In Pokémon Mystery Dungeon: Erkundungsteam Zeit, Dunkelheit und Himmel ist Celebi ein wichtiger Charakter, siehe Celebi (Pokémon Mystery Dungeon). Ebenso ist es Protagonist in Pokémon Party minis Celebis Clock.' },
     { name: 'Jirachi', image: '/PokemonBilder/Jirachi_Bild.png', audio: '/PokemonAudio/Jirachi_Audio.mp3', style: 'Jirachi', type: 'Stahl/Psycho', pokedex: '385', color: 'gelb', category: 'Wunsch-Pokémon', size: '0,3m', weight: '1,1 Kg',info: 'Jirachi ist ein Mysteriöses Pokémon mit den Typen Stahl und Psycho und existiert seit der dritten Spielgeneration. In der Pokémon-Mystery-Dungeon-Reihe ist Jirachi ein wichtiger Nebencharakter. Siehe hierzu Jirachi (Pokémon Mystery Dungeon). Er ist Mitglied des Pokémon-Forscherteams. Jirachi erinnert an eine Sternschnuppe⁠Wikipedia-Icon. Es ist klein und leicht, und tritt hauptsächlich in den Farben Gelb und Weiß auf. Besonders charakteristisch ist sein gelber Kopf, welcher einen Großteil seines Körpers ausmacht. Dieser besitzt die Form eines Sterns mit drei Zacken, von denen einer nach oben zeigt und zwei in die Seiten ragen. An der Spitze dieser Zacken hängt je ein türkisfarbenes Blatt. Die drei Blätter dienen als Notizzettel, auf welche Wünsche geschrieben werden können, die Jirachi, sobald es aufwacht, erfüllt. Es hat große, schwarze Augen, an denen blaue Streifen runterlaufen, die an Tränen erinnern. Das wahre Auge von Jirachi befindet sich jedoch auf seinem Bauch und ist meist nur als halbkreisförmige Linie zu sehen, da das Pokémon überwiegend schläft und das Auge somit geschlossen ist. Ist es jedoch geöffnet, erkennt man eine gelbe Lederhaut mit grüner Iris in der Mitte. Des Weiteren hat das Pokémon zwei kleine, jedoch breite Arme und zwei lange, gelbe, Flügel, die an die Enden einer Geschenkschleife erinnern. In seiner schillernden Form sind die Zettel an den Spitzen von Jirachis Kopf rot und der weiße Körper, sowie das Gesicht, sind rötlich nuanciert.' },
    { name: 'Deoxys', image: '/PokemonBilder/Deoxys/Deoxys_Bild.png', audio: '/PokemonAudio/Deoxys_Audio.mp3', style: 'Mew-Deoxys', type: 'Psycho', pokedex: '386', color: 'rot', category: 'DNS-Pokémon', size: '1,7m', weight: '60,8 Kg',info: 'Deoxys ist ein Mysteriöses Pokémon mit dem Typ Psycho und existiert seit der dritten Spielgeneration. Im Anime nimmt es die Hauptrolle im Film Pokémon 7 – Destiny Deoxys ein.' },
    { name: 'Phione', image: '/PokemonBilder/Phione_Bild.png', audio: '/PokemonAudio/Phione_Audio.mp3', style: 'Phione-Manaphy', type: 'Wasser', pokedex: '489', color: 'blau', category: 'Seeprinz-Pokémon', size: '0,4m', weight: '3,1 Kg',info: 'Phione ist ein Mysteriöses Pokémon mit dem Typ Wasser und existiert seit der vierten Spielgeneration. Aussehen und Körperbau Phione ist ein kleines Pokémon, das stark Manaphy gleicht und fast vollständig dunkelblau auftritt. Einzig auf seinem Bauch ist ein rotes, längliches Element zu erkennen. Sein Aussehen wird von seinem Kopf dominiert, der ca. vier- bis fünfmal größer als der Rest des Körpers ist. Auf dem Kopf des Wasser-Pokémon wächst ein horizontaler, ovaler Teil, aus dem wiederum ein sehr langer, schmaler Schweif ragt, der etwas länger als der komplette Körper ist. Auf dem großen, runden Kopf sind die beiden ebenfalls großen und länglich gebauten Augen zu sehen, die sich aus dunkelblauer Lederhaut, grauen Iriden und schwarzen Pupillen zusammensetzen. Ein Punkt, der mit den Augen über einen dünnen Strich verbunden ist, mustert das Gesicht. Im unteren Bereich ist der kleine Mund zu sehen. An den Seiten des kleinen Torsos wachsen die beiden langen Arme. Schließlich befindet sich unten eine kleine, breite Spitze. In der schillernden Form wirkt Phione insgesamt etwas heller. Zucht und Entwicklung: Phione hat, wie alle Mysteriösen Pokémon, keine Vorstufe und ist auch nicht dazu in der Lage, sich weiterzuentwickeln. Dennoch schlüpft es aus einem Ei durch Zucht aus Manaphy gepaart mit Ditto.' },
    { name: 'Manaphy', image: '/PokemonBilder/Manaphy_Bild.png', audio: '/PokemonAudio/Manaphy_Audio.mp3', style: 'Phione-Manaphy', type: 'Wasser', pokedex: '490', color: 'blau', category: 'Seeprinz-Pokémon', size: '0,3m', weight: '1,4 Kg',info: '' },
    { name: 'Darkrai', image: '/PokemonBilder/Darkrai_Bild.png', audio: '/PokemonAudio/Darkrai_Audio.mp3', style: 'Darkrai', type: 'Unlicht', pokedex: '491', color: 'schwarz', category: 'Finsternacht-Pokémon', size: '1,5m', weight: '50,5 Kg',info: '' },
    { name: 'Arceus', image: '/PokemonBilder/Arceus_Bild.png', audio: '/PokemonAudio/Arceus_Audio.mp3', style: 'Arceus', type: 'Normal', pokedex: '493', color: 'weiß', category: 'Alpha-Pokémon', size: '3,2m', weight: '320,0 Kg',info: '' },
    { name: 'Victini', image: '/PokemonBilder/Victini_Bild.png', audio: '/PokemonAudio/Victini_Audio.mp3', style: 'Victini', type: 'Psycho/Feuer', pokedex: '494', color: 'gelb', category: 'Sieg-Pokémon', size: '0,4m', weight: '4,0 Kg',info: '' },
    { name: 'Keldeo', image: '/PokemonBilder/Keldeo/Keldeo_Bild.png', audio: '/PokemonAudio/Keldeo_Audio.mp3', style: 'Keldeo', type: 'Wasser/Kampf', pokedex: '647', color: 'gelb', category: 'Jungpferd-Pokémon', size: '1,4m', weight: '48,5 Kg',info: '' },
    { name: 'Genesect', image: '/PokemonBilder/Genesect_Bild.png', audio: '/PokemonAudio/Genesect_Audio.mp3', style: 'Genesect', type: 'Käfer/Stahl', pokedex: '649', color: 'violett', category: 'Paläozoikum-Pokémon', size: '1,5m', weight: '82,5 Kg',info: '' },
    { name: 'Diancie', image: '/PokemonBilder/Diancie/Diancie_Bild.png', audio: '/PokemonAudio/Diancie_Audio.mp3', style: 'Diancie', type: 'Gestein/Fee', pokedex: '719', color: 'rosa', category: 'Juwel-Pokémon', size: '0,7m', weight: '8,8 Kg',info: '' },
    { name: 'Hoopa', image: '/PokemonBilder/Hoopa/Hoopa_Bild.png', audio: '/PokemonAudio/Hoopa_Audio.mp3', style: 'Hoopa', type: 'Psycho/Geist', pokedex: '720', color: 'violett', category: 'Schabernack-Pokémon', size: '0,5m', weight: '9,0 Kg',info: '' },
    { name: 'Volcanion', image: '/PokemonBilder/Volcanion_Bild.png', audio: '/PokemonAudio/Volcanion_Audio.mp3', style: 'Volcanion', type: 'Feuer/Wasser', pokedex: '721', color: 'braun', category: 'Dampf-Pokémon', size: '1,7m', weight: '195,0 Kg',info: '' },
    { name: 'Magearna', image: '/PokemonBilder/Magearna/Magearna_Bild.png', audio: '/PokemonAudio/Magearna_Audio.mp3', style: 'Magearna', type: 'Stahl/Fee', pokedex: '801', color: 'grau', category: 'Kunstwerk-Pokémon', size: '1,0m', weight: '80,5 Kg',info: '' },
    { name: 'Marshadow', image: '/PokemonBilder/Marshadow_Bild.png', audio: '/PokemonAudio/Marshadow_Audio.mp3', style: 'Marshadow', type: 'Kampf/Geist', pokedex: '802', color: 'grau', category: 'Schattenlauer-Pokémon', size: '0,7m', weight: '22,2 Kg',info: '' },
    { name: 'Zeraora', image: '/PokemonBilder/Zeraora_Bild.png', audio: '/PokemonAudio/Zeraora_Audio.mp3', style: 'Zeraora', type: 'Elektro', pokedex: '807', color: 'gelb', category: 'Donnerkrallen-Pokémon', size: '1,5m', weight: '44,5 Kg',info: '' },
    { name: 'Melmetal', image: '/PokemonBilder/Melmetal/Melmetal_Bild.png', audio: '/PokemonAudio/Melmetal_Audio.mp3', style: 'Melmetal', type: 'Stahl', pokedex: '809', color: 'grau', category: 'Bolzenmutter-Pokémon', size: '2,5m', weight: '800,0 Kg',info: '' },
    { name: 'Zarude', image: '/PokemonBilder/Zarude/Zarude_Bild.png', audio: '/PokemonAudio/Zarude_Audio.mp3', style: 'Zarude', type: 'Unlicht/Pflanze', pokedex: '893', color: 'grün', category: 'Schlingaffe-Pokémon', size: '1,8m', weight: '70,0 Kg',info: '' },
    { name: 'Infamomo', image: '/PokemonBilder/Infamomo_Bild.png', audio: '/PokemonAudio/Infamomo_Audio.mp3', style: 'Infamomo', type: 'Feuer/Geist', pokedex: '1025', color: 'grün', category: 'Beerdigung-Pokémon', size: '1,5m', weight: '38,0 Kg',info: '' },
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
