import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'ecommerce app';
  loading: boolean = false;

  //products:IProduct[] = data;//only for local json data
  //products: IProduct[] = [];//second way
  //products$: Observable<IProduct[]> //stream way
  term = ''//for products filter

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

    this.loading = true;
    //modify for create product
    this.productsService.getAll().subscribe(()=>{
      this.loading=false
    })

  }
}
