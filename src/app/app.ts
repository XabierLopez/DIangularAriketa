import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nabigazioa } from './nabigazioa/nabigazioa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nabigazioa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularDIariketa');
}
