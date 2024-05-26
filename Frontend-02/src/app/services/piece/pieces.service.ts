import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getPiecesList(){
    return this.httpClient.get<any[]>('./../assets/data/piecesList.json');
  }
}
