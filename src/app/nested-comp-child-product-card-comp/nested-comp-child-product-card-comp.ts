import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-comp-child-product-card-comp',
  imports: [],
  templateUrl: './nested-comp-child-product-card-comp.html',
  styleUrl: './nested-comp-child-product-card-comp.css',
})
export class NestedCompChildProductCardComp {

  productName =["Laptop","Charger","Mobile","IPad","HardDrive"]
  price=[60000,1000,20000,50000,30000]

}
