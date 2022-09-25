import { Component, OnInit } from '@angular/core';
import { SellService } from "../service/sell.service";
import { Router } from '@angular/router';
import { SignUpdata } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellService, private router:Router) { }
  showLogin = false;
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:SignUpdata): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }

  login(data:SignUpdata): void {
    console.warn(data);
  }

  openLogin(){
    console.log("clicked")
  this.showLogin = !this.showLogin;
  }
}
