import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    loop: true,
    initialSlide: 1,
    speed: 400
  };

  banners = [{
    title: "Electronics",
    img: "assets/banners/Electronics.jpg"
  },{
    title: "Electronics",
    img: "assets/banners/Electronics.jpg"
  },{
    title: "Electronics",
    img: "assets/banners/Electronics.jpg"
  }];

  products = [{
    name: "Shirts",
    img: "assets/products/Shirts.jpg",
    price: "$ 100",
    content: "Keep close to Nature's heart... and break clear away, once in awhile,"+
    "and climb a mountain or spend a week in the woods. Wash your spirit clean."
  },{
    name: "Shirts",
    img: "assets/products/Shirts.jpg",
    price: "$ 100",
    content: "Keep close to Nature's heart... and break clear away, once in awhile,"+
    "and climb a mountain or spend a week in the woods. Wash your spirit clean."
  },{
    name: "Shirts",
    img: "assets/products/Shirts.jpg",
    price: "$ 100",
    content: "Keep close to Nature's heart... and break clear away, once in awhile,"+
    "and climb a mountain or spend a week in the woods. Wash your spirit clean."
  }];

  constructor() { }

  ngOnInit() {
  }

}
