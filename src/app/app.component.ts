import { Component, OnInit } from '@angular/core';
import { products as data } from "./data/products";
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  

  //products:IProduct[] = data;//only for local json data
  //products: IProduct[] = [];//second way
  //products$: Observable<IProduct[]> //stream way

  //moved to product-page
  // title = 'ecommerce app';
  // loading: boolean = false;
  // term = ''//for products filter

  constructor(public productsService: ProductsService, public modalService: ModalService) {
  }

  ngOnInit(): void {
   
    //second way
    // this.productsService.getAll().subscribe((products) => {      
    //   console.log(products);
    //   this.products = products;
    //   this.loading=false;
    // })

    //stream way
    //this.products$ = this.productsService.getAll()

    //stream way + rxjs
    //this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))

    //moved to product-page
    // this.loading = true;
    // //modify for create product
    // this.productsService.getAll().subscribe(()=>{
    //   this.loading=false
    // })

  }
}
