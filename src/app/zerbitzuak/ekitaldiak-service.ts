import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EkitaldiakService {
  private apiUrl='https://api.euskadi.eus/culture/events/v1.0'; // url prefijoa
  
  constructor(private http:HttpClient) { // inject ordez, zerbitzuak txertatzeko beste era bat

  }
  
  // ekitaldi mota guztiak bueltatu
  getEkitaldiMotak():Observable<EkitaldiMotak[]>{
    return this.http.get<EkitaldiMotak[]>(this.apiUrl+'/eventType'); //url prefijoa + dagokion endpointaren ruta
  }
//   [
//   {
//     "id": "1",
//     "nameEs": "Concierto",
//     "nameEu": "Kontzertua"
//   },
//  ...
//   ,
//   {
//     "id": "16",
//     "nameEs": "Fiestas",
//     "nameEu": "Jaiak"
//   }
// ]

// opendata euskadi webgunean, ekitaldien APIaren atalean, endpointen informazio guztia dago, frogatzeko aukera ere
// ruta bukaera adibidea
// /events/byType/4?_elements=20&_page=1' 
  getEkitaldiakMotarenArabera(id:number, page:number, elements:number):Observable<Ekitaldi[]>{ // ekitaldi motared id eta paginaziorako parametroak, orrialdea eta orrialde bakoitzeko elementu kopurua
    return this.http.get<Ekitaldi[]>(this.apiUrl+'/events/byType/'+id+'?_elements='+elements+'&_page='+page); // paginazio parametroak ere urlan sartu
  }

}

export interface EkitaldiMotak{
  id:number;
  // nameEs: string; // APIak propietate hori bueltatzen duen arren, aplikazio honetan ez da erabiliko. !!! Erantzunetik ez da ezabatuko propietatea, interfazean ez dagoen arren, beraz zuzenean ignoratu
  nameEu:string;
}

export interface Ekitaldi{
  id: number;
  startDate:string;
  municipalityEu:string;
  priceEu:string;
  // askoz propietate gehiaho endpointaren erantzunean, baina soilik hauek erabiliko dira aplikazio honetan. Erantzunean bai egongo dira, baina ignoratuko ditugu
}