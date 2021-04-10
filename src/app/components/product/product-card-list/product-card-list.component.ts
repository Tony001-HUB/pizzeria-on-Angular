import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {DataHandlerService} from "../../../service/data-handler.service";

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {

  @Input()  products: Product[];
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.productData.subscribe(product => this.products = product);
  }
}
