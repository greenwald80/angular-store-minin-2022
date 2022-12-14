import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'//for automatic registration
})

export class ProductsService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

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
                retry(2),// send new request if no data in current request 
                catchError(this.errorHandler.bind(this)) //bind for this context
            )
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message);

    }
}