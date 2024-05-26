import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitsService {

  constructor(private httpClient: HttpClient) { 

  }

  getBitsList(){
    return this.httpClient.get<any[]>('./../assets/data/bitsList.json');
  }
}
