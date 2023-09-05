import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CambioPageComponent } from './pages/cambio-page/cambio-page.component';
import { cajeroRoutingModule } from './cajero-routing.module';
import { PagoPageComponent } from './pages/pago-page/pago-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CambioPageComponent,
    PagoPageComponent
  ],
  imports: [
    CommonModule,
    cajeroRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CajeroModule { }
