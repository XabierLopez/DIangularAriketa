import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Ekitaldi } from '../zerbitzuak/ekitaldiak-service';
import { ActivatedRoute } from '@angular/router';
import { EkitaldiakService } from '../zerbitzuak/ekitaldiak-service';

@Component({
  selector: 'app-ekitaldiak',
  imports: [],
  templateUrl: './ekitaldiak.html',
  styleUrl: './ekitaldiak.css',
})
export class Ekitaldiak {
  urlId: string | null = null;
  ekitaldiak = signal<Ekitaldi[]|null>(null); //null bezala inizializatuz [] ordez, httpget-aren erantzuna itxaroten ari den edo erantzuna hutsik dagoen ezberdindu daiteke beti

  constructor(private route: ActivatedRoute, private ekitaldiakService: EkitaldiakService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe( //horrela href erabili beharrean routerlink erabili ahal izateko, urlko aldaketak detektatuz. Routerlink bidez orrialde osoa errekargatzea aurrezten dugu.
      (params) => {
        this.urlId=params.get('id');
        console.log('urlId:', this.urlId);
        this.ekitaldiakService.getEkitaldiakMotarenArabera(this.urlId ? this.urlId : '1', '1', '20').subscribe( //urlan id ez badago, 1
          (ekitaldiakErantzuna) => {
            let items=ekitaldiakErantzuna && ekitaldiakErantzuna.items ? ekitaldiakErantzuna.items : []; //erantzunaren items [] ez izanez gero erantzun hutsetan, adbidez null, [] bihurtu. Horrela null hasiera balioa eta [] erantzun hutsa bereizten dira.
            this.ekitaldiak.set(items);
            console.log(ekitaldiakErantzuna.items);
          }
        );
      }
    );

  }
}
