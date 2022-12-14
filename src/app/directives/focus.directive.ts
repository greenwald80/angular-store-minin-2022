import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }

  //life cycle hook after onInit
  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }



}
