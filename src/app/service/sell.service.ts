import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginData, SignUpdata } from '../data-type';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: SignUpdata) {
    let resultData = this.http.post("http://localhost:3000/seller", data, { observe: 'response' })
    console.warn("called--", resultData)
    resultData.subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home']);
      console.warn('result', result)
    });

  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data: loginData) {
    console.warn(data)
    let resultData = this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
    console.warn("called--", resultData)
    resultData.subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        console.warn("user logged in")
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
      } else {
        console.warn(" logged in error")
        this.isLoginError.emit(true);
      }
      console.warn('result', result)
    });
  }

 

}

