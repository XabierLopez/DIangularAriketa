import { Component } from '@angular/core';
import { Nabigazioa } from '../nabigazioa/nabigazioa';
import { Ekitaldiak } from '../ekitaldiak/ekitaldiak';

@Component({
  selector: 'app-home',
  imports: [Nabigazioa, Ekitaldiak],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
