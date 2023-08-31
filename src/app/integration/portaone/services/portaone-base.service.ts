import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortaoneBaseService {
emitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
