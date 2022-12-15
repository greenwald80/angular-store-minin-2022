import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'//for automatic registration
})

export class ProductsService {

    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    products: IProduct[] = [];

    getAll(): Observable<IProduct[]> {
        //return this.http.get<IProduct[]>('https://fakestoreapi.com/products1', //for error handler showing
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products',
            {
                //show only 5 items
                //params: new HttpParams().append('limit', 5)
                //or
                //params: new HttpParams({fromString:'limit=5'})
                //or
                params: new HttpParams({ fromObject: { limit: 5 } })
            }).pipe(delay(1000),// wait 1 second
                retry(2),// send new request if no data in current request,
                tap(products => this.products = products),// for addong new product to products list (tap перехватывает данные, но не меняет stream)
                catchError(this.errorHandler.bind(this)) //bind for this context
            )
    }

    create(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
            .pipe(tap(prod => this.products.push(prod)))//вносит в локальный массив продуктов
    }
 
    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message);

    }


}