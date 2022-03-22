import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-title',
  templateUrl: './sidebar-title.component.html',
  styleUrls: ['./sidebar-title.component.css']
})
export class SidebarTitleComponent implements OnInit {

  @Input()  headerName: string;

  // title=['Recommended filters','Hotel class','Price','Freebies','Health and safety','Property name','Amentities'];

  constructor() { }

  ngOnInit(): void {
  }

}
