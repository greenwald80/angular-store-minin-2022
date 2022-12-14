import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5)])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
    //console.log(this.form.value); //get value of title field
    //console.log(this.title);//get all properties of title field

  }

}
