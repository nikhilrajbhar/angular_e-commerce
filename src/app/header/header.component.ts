import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string="default";
  sellerName:string="";
  constructor(private route : Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if (val.url) {
        if (val.url.includes('seller') && localStorage.getItem('seller')) {
          console.warn("in seller area");
          this.menuType ='seller';
          console.log(localStorage.getItem("seller"))
          let sellerStore = localStorage.getItem("seller")
          let sellerData = sellerStore && JSON.parse(sellerStore);
          this.sellerName = sellerData[0].name; 
        } else {
          console.warn("not in seller area");
          this.menuType ='default';
          
        }
      }
    });
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  

}
