import { Component } from '@angular/core';
import { NestedCompChildProductCardComp } from "../nested-comp-child-product-card-comp/nested-comp-child-product-card-comp";

@Component({
  selector: 'app-nested-comp-parent-product-comp',
  imports: [NestedCompChildProductCardComp],
  templateUrl: './nested-comp-parent-product-comp.html',
  styleUrl: './nested-comp-parent-product-comp.css',
})
export class NestedCompParentProductComp {

}
