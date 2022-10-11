import { Component, OnInit,ViewChild  } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { BtnCellRenderer } from './btn-cell-renderer.component';
import { AgList } from 'ag-grid-community/dist/lib/widgets/agList';
import { ImageFormatterComponent } from './ImageFormatterComponent';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:product[] | undefined;
  productMessage:string | undefined;
  public rowData$!: Observable<product[]>;


  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private product: ProductService, private http: HttpClient) { }

  columnDefs: ColDef[] = [
    { field: 'productName' },
    { field: 'productPrice' },
    { field: 'productColor' },
    { field: 'productDescription'},
    { field: 'productImage',cellRendererFramework: ImageFormatterComponent },
    { field: 'Action',  
    cellRenderer: BtnCellRenderer,
    cellRendererParams: {
      clicked: (field: number) => {
        console.warn(field);
        alert(`${field} was clicked`);
        this.deleteProduct(field);
      } },}
];



// this.product.deleteProduct(id).subscribe((result: any)=>{
//   console.warn("result-------------");
//   console.warn(result);
 
// })
// columnDefs: ColDef[] = [
//   { field: 'make' },
//   { field: 'model' },
//   { field: 'price' }
// ];

// rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxster', price: 72000 }
// ];

onGridReady(params: GridReadyEvent) {

  this.fetchproductList();

}

  ngOnInit(): void {}

  fetchproductList(){
    this.product.productList().subscribe((result)=>{
      console.log(result)
      this.productList = result; 
      // this.rowData$ = result;
    })
  }
  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      console.warn(result)
      if (result) {
        this.productMessage = "Product deleted Successfully";
        this.fetchproductList();
      }
        

      setTimeout(() => {
        this.productMessage = undefined;  
      }, 3000);
    })
  }


}
