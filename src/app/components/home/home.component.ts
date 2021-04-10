import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() products: Product[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.productData.subscribe(product => this.products = product);
  }

}
