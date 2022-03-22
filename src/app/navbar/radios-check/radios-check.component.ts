import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-radios-check',
  templateUrl: './radios-check.component.html',
  styleUrls: ['./radios-check.component.css']
})
export class RadiosCheckComponent implements OnInit {

  @Input() radioTitle: string;

  form: FormGroup;
  radioTitles = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      radioTitles: ['']
    });

    // mimic async orders
    of(this.getOrders()).subscribe(radioTitles => {
      this.radioTitles = radioTitles;
      this.form.controls.radioTitles.patchValue(this.radioTitles[0].id);
    });

    // synchronous orders
    // this.orders = this.getOrders();
    // this.form.controls.orders.patchValue(this.orders[0].id);
  }

  getOrders() {
    return [
      { id: 1, name: 'Hotel' },
      { id: 2, name: 'Villas & Homes' },
      { id: 3, name: 'Campgrounds' }
    ];
  }

  // submit() {
  //   console.log(this.form.value);
  // }
  

  ngOnInit(): void {
  }

}
