import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Feedback, Product } from "./app.model";


@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient) { }

    private productApiUrl = '/api/product';
    private feedbackApiUrl = '/api/feedback';

    //#region Product apis
    getAllProducts(): Observable<Product[]> {
        return this.get(`${this.productApiUrl}/all`);
    }

    getProduct(productId: any): Observable<Product> {
        return this.get(`${this.productApiUrl}/${productId}`);
    }

    addProduct(product: Product): Observable<boolean> {
        return this.post(`${this.productApiUrl}/add`, product);
    }

    updateProduct(product: Product): Observable<boolean> {
        return this.put(`${this.productApiUrl}/update`, product);
    }

    deleteProduct(productId: any): Observable<void> {
        return this.delete(`${this.productApiUrl}/${productId}/delete`)
    }

    //#endregion

    //#region Feedback endpoints

    getProductFeedback(productId: any): Observable<Feedback[]> {
        return this.get(`${this.feedbackApiUrl}/product/${productId}/all`);
    }

    addProductFeedback(feedback: Feedback): Observable<boolean> {
        return this.post(`${this.feedbackApiUrl}/add`, feedback);
    }

    updateProductFeedback(feedback: Feedback): Observable<boolean> {
        return this.put(`${this.feedbackApiUrl}/update`, feedback)
    }

    deleteProductFeedback(feedbackId: any): Observable<void> {
        return this.delete(`${this.feedbackApiUrl}/${feedbackId}/delete`);
    }

    //#endregion

    //#region Private functions
    private get(url: string, params = new HttpParams()) {
        return this.httpClient.get<any>(url, { params: params }).pipe(catchError(error => throwError(error.error)));
    }

    private put(url: string, body: any) {
        return this.httpClient.put<any>(url, body).pipe(catchError(error => throwError(error.error)));
    }

    private post(url: string, body: any) {
        return this.httpClient.post<any>(url, body).pipe(catchError(error => throwError(error.error)));
    }

    private delete(url: string) {
        return this.httpClient.delete<any>(url).pipe(catchError(error => throwError(error.error)));
    }
    //#endregion

}