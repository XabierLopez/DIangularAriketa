import { Component } from '@angular/core';
import { Nabigazioa } from '../nabigazioa/nabigazioa';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Nabigazioa, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
