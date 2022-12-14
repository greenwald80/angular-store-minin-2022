import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //BehaviorSubject has initial value (идет с каким-то начальным значением), в отличие от Subject
  isVisible$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
  }

}
