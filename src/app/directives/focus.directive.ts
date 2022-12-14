import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el:ElementRef) { }

  //life cycle hook after onInit
  ngAfterViewInit(): void {
   this.el.nativeElement.focus();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
