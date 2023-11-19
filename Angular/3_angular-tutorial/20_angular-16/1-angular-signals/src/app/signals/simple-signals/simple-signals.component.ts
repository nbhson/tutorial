import { Component, OnInit, signal, computed } from '@angular/core';

@Component({
  selector: 'app-simple-signals',
  templateUrl: './simple-signals.component.html',
  styleUrls: ['./simple-signals.component.css']
})
export class SimpleSignalsComponent implements OnInit {
  signalCount = signal(0);
  signalDependent = computed(() => this.signalCount() * 2);
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.signalCount.set(this.signalCount() + 1);
  }

  decrement() {
    this.signalCount.set(this.signalCount() - 1);
  }

}
