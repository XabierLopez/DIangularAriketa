import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Ekitaldiak } from './ekitaldiak/ekitaldiak';

export const routes: Routes = [
    {
        path:'ekitaldiak/:id', //soilik parametro nagusia (motaren id) hemen, paginazio parametroak ez
        component: Ekitaldiak,
        title: 'Ekitaldiak'
    },
    {
        path:'home',
        component: Home,
        title: 'Home'
    },
    {
        path: '',//url hutsa sartuz gero homera bidali
        redirectTo: '/home',
        pathMatch: 'full' //kointzidentzia edo match osoa, bestela partziala aplikatzen da, eta edozein rutak '' duenez, match guztietan egingo luke
    },
    { //Wildcard edo "comodín" ruta, existitzen ez den url bat sartuz gero nagibatzailean, homera bidali
        path: '**',
        redirectTo: '/home'
    }
];
