import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from "rxjs";
import { IProduct } from "../models/product";

@Injectable({
    providedIn: 'root'//for automatic registration
})

export class ProductsService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            //show only 5 items
            //params: new HttpParams().append('limit', 5)
            //or
            //params: new HttpParams({fromString:'limit=5'})
            //or
            params: new HttpParams({ fromObject: { limit: 5 } })
        }).pipe(delay(1000));//wait 1 second
    }
}