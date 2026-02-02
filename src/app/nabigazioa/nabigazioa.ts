import { Component, signal } from '@angular/core';
import { input } from '@angular/core';
import { EkitaldiakService } from '../zerbitzuak/ekitaldiak-service';
import { EkitaldiMotak } from '../zerbitzuak/ekitaldiak-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nabigazioa',
  imports: [RouterLink],
  templateUrl: './nabigazioa.html',
  styleUrl: './nabigazioa.css',
})
export class Nabigazioa {
  horizontala=input<boolean>(true); //nabigazio menu horizontala edo bertikala aukeratzeko, defektuz horizontala
  // ekitaldiMotak:EkitaldiMotak[]=[];
  ekitaldiMotak=signal<EkitaldiMotak[]>([]);
  constructor(private ekitaldiakService:EkitaldiakService) {// inject egin beharrean
  }

  ngOnInit(){
    // http zerbitzuen deiak egitea eta erantzunaren zain geratzea (subscribe) hobeto ngOnInit-en contructor barruan baino dirudienez, konponenteen bizi zikloa kontuan hartuz
    this.ekitaldiakService.getEkitaldiMotak().subscribe(
      (ekitaldiMotakErantzuna)=>{
        this.ekitaldiMotak.set(ekitaldiMotakErantzuna);
        console.log(this.ekitaldiMotak);
      }
    );
    console.log(this.ekitaldiMotak);
  }
}
