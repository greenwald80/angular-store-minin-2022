import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  //using stream+rxjs
  error$ = new Subject<string>()//с помощью Subject можно динамический тригерить изменения данных об ошибке

  handle(message: string) {
    this.error$.next(message);//send to all subscribers about error
  }

  clear() {
    this.error$.next('');//clear message
  }
}
