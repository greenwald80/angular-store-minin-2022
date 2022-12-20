import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl<number>(0, [Validators.required, Validators.min(1), Validators.max(999)]),
    description: new FormControl<string>('', [Validators.maxLength(500)]),
    image: new FormControl<string>('', [Validators.minLength(10)]),
    category: new FormControl<string>('', [Validators.minLength(5)]),
    //rating: new FormControl<any>({ rate: 0.0, count: 0 }, [Validators.required, Validators.max(10)]),
    rate: new FormControl<number>(0, [Validators.min(0), Validators.max(10)]),
    count: new FormControl<number>(0, [Validators.min(0), Validators.max(99)])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  get price() {
    return this.form.controls.price as FormControl
  }

  get description() {
    return this.form.controls.description as FormControl
  }

  get image() {
    return this.form.controls.image as FormControl
  }


  get category() {
    return this.form.controls.category as FormControl
  }

  get rate() {
    return this.form.controls.rate as FormControl
  }

  get count() {
    return this.form.controls.count as FormControl
  }



  submit() {
    //console.log(this.form.value); //get value of title field
    //console.log(this.title);//get all properties of title field
    //https://fakestoreapi.com/docs => Add new product
    this.productsService.create(
      {
        // title: this.form.value.title as string,
        // price: 13.5,
        // description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eaque repellat tempore fugit perspiciatis sed dolores nemo perferendis eligendi quis eius ex, aliquam sequi, sit dolore dignissimos cum maxime asperiores.',
        // image: 'https://i.pravatar.cc',
        // category: 'electronic',
        // rating: {
        //   rate: 4.2,
        //   count: 1
        // }
        title: this.form.value.title as string,
        price: this.form.value.price ? this.form.value.price : 13.5,
        description: this.form.value.description ? this.form.value.description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eaque repellat tempore fugit perspiciatis sed dolores nemo perferendis eligendi quis eius ex, aliquam sequi, sit dolore dignissimos cum maxime asperiores.',
        image: this.form.value.image ? this.form.value.image : 'https://i.pravatar.cc',
        category: this.form.value.category ? this.form.value.category : 'electronic',
        rating: {
          rate: this.form.value.rate ? this.form.value.rate : 4.2,
          count: this.form.value.count ? this.form.value.count : 1,
        }
      }
    ).subscribe(() => {
      this.modalService.close();
    })
  }

}
