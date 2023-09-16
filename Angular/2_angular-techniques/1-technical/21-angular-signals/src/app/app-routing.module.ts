import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signal-type', loadChildren: () => import('./signal-types/signal-types.module').then(m => m.SignalTypesModule) },
  { path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
