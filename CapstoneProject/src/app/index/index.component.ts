import { Component, OnInit } from '@angular/core';

import { CodeNode } from 'source-list-map';

import { ICategory } from '../Category';
import { ImageLoaderService } from '../image-loader.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';





@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  jsonData: ICategory;
  image1: any;
  image2: any;
  image3: any;
  

  public test: any;
  constructor(public data: ImageLoaderService) {

    this.image1 = "";
    this.image2 = "";
    this.image3 = "";
   


  }

 


  ngOnInit() {
  

    this.data.getData().subscribe((value: ICategory) => {
      this.jsonData = value;
      this.image1 = this.jsonData[0].subcategories[0].items[0].imagelink;
      console.log(this.image1);
      this.image2 = this.jsonData[1].subcategories[1].items[1].imagelink;
      this.image3 = this.jsonData[2].subcategories[1].items[2].imagelink;
      console.log(this.image3);
    })
  }
}
