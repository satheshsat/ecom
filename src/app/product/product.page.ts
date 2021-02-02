import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product = {
    name: "Shirts",
    img: "assets/products/Shirts.jpg",
    price: "$ 100",
    content: "Keep close to Nature's heart... and break clear away, once in awhile,"+
    "and climb a mountain or spend a week in the woods. Wash your spirit clean."
  };

  constructor() { }

  ngOnInit() {
  }

}
