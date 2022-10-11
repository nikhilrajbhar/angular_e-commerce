import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }

  productAdd(data: any) {
    console.warn(data)
    return this.http.post(`http://localhost:3000/product`,data)

  }

  productList() {
    return this.http.get<product[]>(`http://localhost:3000/product`);
  }

  deleteProduct(id:number){
    console.warn(id);
    console.warn("working till here");

    return this.http.delete(`http://localhost:3000/product/${id}`);
  }
  
}
