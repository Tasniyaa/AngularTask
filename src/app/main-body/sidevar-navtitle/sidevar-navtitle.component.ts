import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidevar-navtitle',
  templateUrl: './sidevar-navtitle.component.html',
  styleUrls: ['./sidevar-navtitle.component.css']
})
export class SidevarNavtitleComponent implements OnInit {

  @Input() navTitle: string;
  checkBox=['breakfast', 'parking', 'internet', 'cancellation', 'airport shuttle'];

  constructor() { }

  ngOnInit(): void {
  }

}
