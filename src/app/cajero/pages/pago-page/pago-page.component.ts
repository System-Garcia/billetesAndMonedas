import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CajeroService } from '../../services/cajero.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-pago-page',
  templateUrl: './pago-page.component.html',
  styleUrls: ['./pago-page.component.css']
})
export class PagoPageComponent {
  public numbers: number[] = [1, 2, 3, 4 , 5, 6, 7, 8, 9];
  public total: number[] = [];
  public alerta: boolean = false;

  constructor(
    private cajeroService: CajeroService,
    private router: Router){}

  agregarNumero(numero: number): void {
    this.total.push(numero);
  }

  borrarNumero(): void {
    this.total.pop();
  }

  limpiarInput(): void {
    this.total = [];
  }

  get valueInput(): string {
    let cadena: string = '';
      this.total.forEach( valor => {
      cadena += valor;
    })

    return cadena;
  }

  validarPago(pago: string): void {

    if(Number(pago) <= 0 ) {
      this.alerta = true;

      setTimeout(() => {
        this.alerta = false;
      }, 3000);

      return;
    }

    this.cajeroService.pago = Number(pago);
    this.router.navigateByUrl('/cajero/cambio')
  }
}
