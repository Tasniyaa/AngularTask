import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  currentRate = 0;
  

  constructor() { 
  //   function myFunction(x: any) {
  //     x.classList.toggle("fa-thumbs-down");
  // } 
  }

  ngOnInit(): void {
  }

}
