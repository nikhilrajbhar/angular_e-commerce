import { Component, OnInit } from '@angular/core';
import { SellService } from "../service/sell.service";
import { Router } from '@angular/router';
import { loginData, SignUpdata } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellService, private router:Router) { }
  showLogin = false;
  authError:string = "";
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:SignUpdata): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }

  login(data: loginData): void {
    console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((e)=>{
      if (e) {
        this.authError = "Email or password is incorrect"
      }
    })
  }

  openLogin(){
    console.log("clicked")
  this.showLogin = !this.showLogin;
  }
}
