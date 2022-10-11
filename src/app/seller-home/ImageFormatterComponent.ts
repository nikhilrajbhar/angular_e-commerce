import { Component } from "@angular/core";

@Component({
  selector: 'app-image-formatter-cell',
  styleUrls: ['./seller-home.component.css'],
  template: `<img class="rounded-image" width="35" height="35" src=\"{{ params.value }}\">` })

export class ImageFormatterComponent {
  params: any;
  agInit(params: any){
    this.params = params; 
  } 
}