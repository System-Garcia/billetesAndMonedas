import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { CambioPageComponent } from "./pages/cambio-page/cambio-page.component";
import { PagoPageComponent } from "./pages/pago-page/pago-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'cambio',
        component: CambioPageComponent
      },
      {
        path: 'pago',
        component: PagoPageComponent,
      },
      {
        path: '**',
        redirectTo: 'pago'
      }
    ]

  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cajeroRoutingModule {}
