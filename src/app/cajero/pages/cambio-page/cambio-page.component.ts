import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CajeroService } from '../../services/cajero.service';
import { Router } from '@angular/router';
import { environments } from 'src/app/environments/enviroment';

@Component({
  selector: 'app-cambio-page',
  templateUrl: './cambio-page.component.html',
  styleUrls: ['./cambio-page.component.css'],
})
export class CambioPageComponent implements OnInit {
  public cambio!: number;

  imageUrl: string = environments.imageUrl;

  public billete500: number = 0;
  public billete200: number = 0;
  public billete50: number = 0;
  public moneda10: number = 0;
  public moneda5: number = 0;
  public moneda1: number = 0;

  constructor(public router: Router, private cajeroService: CajeroService) {}

  calcularCambio(cantidad: number): void {
    this.billete500 = 0;
    this.billete200 = 0;
    this.billete50 = 0;
    this.moneda10 = 0;
    this.moneda5 = 0;
    this.moneda1 = 0;

    if (isNaN(Number(cantidad))) return;

    let restante: number = Number(cantidad);

    if (Number(restante) >= 500) {
      const resultado = Math.floor(Number(restante) / 500);
      this.billete500 = resultado;
      restante -= resultado * 500;

      if (Number(cantidad) % 500 === 0) return;
    }

    if (Number(restante) >= 200) {
      const resultado = Math.floor(Number(restante) / 200);

      this.billete200 = resultado;
      restante -= resultado * 200;

      if (Number(cantidad) % 200 === 0) return;
    }

    if (Number(restante) >= 50) {
      const resultado = Math.floor(Number(restante) / 50);

      this.billete50 = resultado;
      restante -= resultado * 50;

      if (Number(cantidad) % 50 === 0) return;
    }

    if (Number(restante) >= 10) {
      const resultado = Math.floor(Number(restante) / 10);

      this.moneda10 = resultado;
      restante -= resultado * 10;

      if (Number(cantidad) % 10 === 0) return;
    }

    if (Number(restante) >= 5) {
      const resultado = Math.floor(Number(restante) / 5);

      this.moneda5 = resultado;
      restante -= resultado * 5;

      if (Number(cantidad) % 5 === 0) return;
    }
    console.log(restante);

    if (Number(restante) >= 1) {
      const resultado = Math.floor(Number(restante) / 1);

      this.moneda1 = resultado;
      restante -= resultado;

      if (Number(cantidad) % 1 === 0) return;
    }

    console.log(restante);
  }

  goBack() {
    this.cajeroService.pago = 0;
    this.router.navigateByUrl('/cajero/cobro');
  }

  ngOnInit(): void {
    if (this.cajeroService.pago === 0)
      this.router.navigateByUrl('/cajero/pago');
    console.log(this.cajeroService.pago);
    this.cambio = this.cajeroService.pago;
    this.calcularCambio(this.cajeroService.pago);
  }
}
