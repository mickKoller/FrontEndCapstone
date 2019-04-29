import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Category';
import { ImageLoaderService } from '../image-loader.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  jsonData: ICategory;
  constructor(public data: ImageLoaderService) { }

  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.jsonData = value;
    })
    $(".remove").on("click", function () {
      $(".remove").addClass("d-none");
      $(".current-price").on("click", function () {
        $(".current-price").addClass("d-none");
      })
    })
    $(".toggle-shipping-tricker").on("click", function () {
      $(".toggle-shipping-details").toggleClass("d-none");
    })
    $(".remove2").on("click", function () {
      $(".remove2").addClass("d-none");
    })

  
  }

}
