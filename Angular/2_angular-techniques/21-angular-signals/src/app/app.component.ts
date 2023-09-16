import { Component } from '@angular/core';
import { BroadcastService } from './signal-types/broadcast/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = '';

  constructor(private broadcastService: BroadcastService) {
    this.broadcastService.broadcastSubject$.subscribe(message => {
      this.message = message;
    });
  }
}
