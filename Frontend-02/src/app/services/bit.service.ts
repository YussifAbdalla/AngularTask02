import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ibit } from './bit.model';

const bits = [
  { id: '04b79f11-6e6b-4b33-a20b-0cb3096c5684', name: 'chunk' },
  { id: 'acd22a61-ac34-41b3-8fb1-d375a473e214', name: 'bite' },
  { id: 'd38a8108-be3a-4543-bb22-65763ccc3d2b', name: 'spoon' },
  { id: '83f8b21c-acd9-42e1-aee3-480a3dfa68f5', name: 'pile' },
];

@Injectable({
  providedIn: 'root'
})

export class BitsService {


  constructor() { 

  }

  GetBits(): Observable<Ibit[]> {
    return of(bits)
  }

  GetBit(id: string): Observable<Ibit | undefined> {
    return of(bits.find(n => n.id == id));
  }
}
