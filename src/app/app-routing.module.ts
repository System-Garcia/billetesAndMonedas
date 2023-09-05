import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cajero',
    loadChildren: () =>
      import('./cajero/cajero.module').then(
        (modulo) => modulo.CajeroModule
      )
  },
  {
    path: '**',
    redirectTo: 'cajero'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
