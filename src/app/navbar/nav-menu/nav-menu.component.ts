import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() navNum: number;
  @Input() navIcon: string;
  @Input() navIconDetail: string;
  nNum=['1','2','3','4','5','6']
  active = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
