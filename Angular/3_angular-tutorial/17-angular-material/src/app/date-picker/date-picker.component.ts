import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2019, 3, 10);
  constructor() { }

  ngOnInit(): void {
  }

}
