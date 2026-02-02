import { Routes } from '@angular/router';

import { Ekitaldiak } from './ekitaldiak/ekitaldiak';

export const routes: Routes = [
    {
        path:'ekitaldiak/:id', //soilik parametro nagusia (motaren id) hemen, paginazio parametroak ez
        component: Ekitaldiak,
        title: 'Ekitaldiak'
    },
    {
        path:'ekitaldiak', //konponentean urlId ez badago 1 bezala hartzen da. Horren ordez, hutsik dagoenean placeholder bat jarri daiteke ere.
        component: Ekitaldiak,
        title: 'Ekitaldiak'
    },
    {
        path: '',//url hutsa sartuz gero ekitaldiak konponentera bidali
        redirectTo: '/ekitaldiak',
        pathMatch: 'full' //kointzidentzia edo match osoa, bestela partziala aplikatzen da, eta edozein rutak '' duenez, match guztietan egingo luke
    },
    { //Wildcard edo "comodín" ruta, existitzen ez den url bat sartuz gero nagibatzailean, ekitaldiak konponentera bidali
        path: '**',
        redirectTo: '/ekitaldiak'
    }
];
