import { Component, OnInit } from '@angular/core';
import { products as data } from "./data/products";
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ecommerce app';
  //products:IProduct[] = data;//only for local json data
  products: IProduct[] = [];
loading:boolean=false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading=true;
    this.productsService.getAll().subscribe((products) => {      
      console.log(products);
      this.products = products;
      this.loading=false;
    })
  }
}
