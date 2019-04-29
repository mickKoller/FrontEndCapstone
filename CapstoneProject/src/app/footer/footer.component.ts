import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  constructor() { }

  counter() {
    var counter = 0;
    var currentElement = document.getElementById("target");
    counter++;

  }

  ngOnInit() {  
  }

}
