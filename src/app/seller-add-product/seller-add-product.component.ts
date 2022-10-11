import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMsg:string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  
 
  addProductSubmit(data: Object){
    console.log(data);
    this.product.productAdd(data).subscribe((result)=>{
      console.log("qqqqqqresult",result);
      if (result) {
        this.addProductMsg = "Product Added Succesfully";
      }
      setTimeout(() => {
        this.addProductMsg = undefined;
      }, 3000);
    })
  }
}
