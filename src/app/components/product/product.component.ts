import {Component, Input} from '@angular/core';
import { IProduct } from './../../models/product';

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{
//For error of @Input() products:IProduct
// tsconfig.json:
//  "noFallthroughCasesInSwitch": false,
//  "strictPropertyInitialization": false,
    @Input() product:IProduct;

    details: boolean = false;

}