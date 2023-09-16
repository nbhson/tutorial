import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals.component';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ],
  declarations: [SignalsComponent]
})
export class SignalsModule { }
