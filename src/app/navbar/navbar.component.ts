import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active = 1;
  
  navDetails=[
    { num:'1', icon:'bi bi-cart-check-fill', details:'Flight' },
    { num:'2', icon:'bi bi-house-door-fill', details:'Hotels' },
    { num:'3', icon:'bi bi-cart-check-fill', details:'Car' },
    { num:'4', icon:'bi bi-geo-alt', details:'Activies' },
    { num:'5', icon:'bi bi-people-fill', details:'Group Travels' },
    { num:'6', icon:'bi bi-geo-alt', details:'Sea Travel' }
  ];
  constructor () {}
  
  activeStatus = 0;

  ngOnInit(): void {
         
  }
  

}


