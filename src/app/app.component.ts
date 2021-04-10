import {Component, Input, OnInit} from '@angular/core';
import {DataHandlerService} from "./service/data-handler.service";
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[];

  constructor() { }

  title = 'untitled';

  ngOnInit(): void {
  }
}

