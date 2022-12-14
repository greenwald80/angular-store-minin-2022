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

  title = 'ecommerce app';
  loading: boolean = false;

  //products:IProduct[] = data;//only for local json data
  //products: IProduct[] = [];//second way
  products$: Observable<IProduct[]> //stream way
  term = ''//for products filter

  constructor(private productsService: ProductsService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true;

    //second way
    // this.productsService.getAll().subscribe((products) => {      
    //   console.log(products);
    //   this.products = products;
    //   this.loading=false;
    // })

    //stream way
    //this.products$ = this.productsService.getAll()

    //stream way + rxjs
    this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))


  }
}
