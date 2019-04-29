import { ICategory } from '../Category';
import { Component, OnInit } from '@angular/core';
import { ImageLoaderService } from '../image-loader.service';

import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3';
import { CodeNode } from 'source-list-map';
import { ISubcategory } from '../subcategory';
import { Subcategories } from '../subcategories';
import { IItems } from '../items';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  
  
  jsonData: ICategory;
  categories: Observable<ICategory[]>;
  products: Observable<IItems[]>;
  subcategories: Observable<ISubcategory[]>;


  constructor(public data: ImageLoaderService, private route: ActivatedRoute) {

    this.categories = this.data.getCategories();

    /*
    this.subcategories = this.data.getSubCategories();
    */
    this.products = this.data.getItems();

  }
  
  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.jsonData = value;
    })


   

    $(".household-wrapper").on("click", function () {
      $(".houshold-nav-item").toggleClass("d-none");
    
   
    })

    $(".pantry-wrapper").on("click", function () {
      $(".pantry-nav-items").toggleClass("d-none");
   
    })

    $(".perishables-wrapper").on("click", function () {
   
      $(".perishables-item").toggleClass("d-none");
    })

    $(".produce-wrapper").on("click", function () {
      $(".produce-item").toggleClass("d-none");
    
    })

  }

  
}
