import { Component, OnDestroy } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'btn-cell-renderer',
  template: `
    <div style="display: flex;">
      <span style="flex:1"><i (click)="btnClickedHandler($event)" class="fa fa-trash"></i></span>
      <a style="flex:1" href="/seller-update-product/{{this.productId}}" ><i class="fa fa-edit"></i></a>
    </div>   
  `,
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;
  public productId:any;
  agInit(params: any): void {
    this.params = params;
    this.productId = this.params.data?.id;
  }
  
  btnClickedHandler(event: any) {
    this.params.clicked(this.params.data?.id);
  }

  refresh() {
    return false;
  }
}

// <button (click)="btnClickedHandler($event)">Delete</button>