import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hotel-car';
  public isChecked = true;

  log() {
    console.log(this.isChecked);
  }

}
