import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from 'src/app/directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  HightlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
