import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'//for automatic registration
})

export class ProductsService {
    constructor(private http: HttpClient) {
    }

    getAll(){
       return this.http.get('https://fakestoreapi.com/products')
    }
}