import { Routes } from '@angular/router';
import { Pokemoncards } from './pokemoncards/pokemoncards';
import { Pokemondetail } from './pokemondetail/pokemondetail';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'pokemoncards',
        pathMatch: 'full',
    },
    {
        path: 'pokemoncards',
        component:Pokemoncards
    },
    {
        path: 'pokemondetail',
        component: Pokemondetail
    }
];
