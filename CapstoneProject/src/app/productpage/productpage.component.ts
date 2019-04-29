import { Component, OnInit, Input } from '@angular/core'; 
import { ImageLoaderService } from '../image-loader.service';
import { ICategory } from '../Category';
import { ShoppingPageComponent } from '../shopping-page/shopping-page.component';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  jsonData: ICategory; 
  category: ICategory;

  constructor(public data: ImageLoaderService) {
  
    }

  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.jsonData = value;
    })  
  }

}
