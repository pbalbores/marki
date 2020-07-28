import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor() { }

  precioCompra: number;
  ivaCompra: number;
  precioTotalCompra: number;
  PVP: number;
  precioVentaNeto: number;
  ivaVenta: number;
  iva: number;
  ivaSinRecargo: number;
  beneficioTotal: number;
  datosRetorno = [];

  calcular(precioCompra, ivaCompra, re) {

    //APLICAMOS RECARGO EQUIVALENCIA
    if (ivaCompra == "4" && re == "SI") {
      ivaCompra = 4.05;
    } else if (ivaCompra == "10" && re == "SI") {
      ivaCompra = 11.4
    } else if (ivaCompra == "21" && re == "SI") {
      ivaCompra = 26.2
    }

    //CALCULAMOS IVA
    this.iva = 1 + (ivaCompra / 100);

    this.precioCompra = precioCompra;

    //CALCULAMOS IVA VENTA SIN RECARGO
    if (this.iva === 1.0405) {
      this.ivaSinRecargo = 1.04
    } else if (this.iva === 1.114) {
      this.ivaSinRecargo = 1.10
    } else if (this.iva === 1.262) {
      this.ivaSinRecargo = 1.21
    } else {
      this.ivaSinRecargo = this.iva
    }

    //CALCULAMOS RESULTADOS
    this.calcularPrecioTotalCompra()
    this.calcularBeneficio();

  }

  //CALCULAMOS PRECIO TOTAL DE COMPRA
  calcularPrecioTotalCompra() {
    this.precioTotalCompra = this.precioCompra * this.iva;

  }

  //CALCULAMOS PORCENTAJES DE BENEFICIOS, PRECIO NETO, IVA, PRECIO CON IVA Y BENEFICIO TOTAL
  calcularBeneficio() {

    let num = 15;
    while (num <= 200) {
      this.precioVentaNeto = this.precioCompra * (1 + (num / 100));
      this.PVP = this.precioVentaNeto * this.ivaSinRecargo;
      this.ivaVenta = this.PVP - this.precioVentaNeto;
      this.beneficioTotal = this.PVP - this.precioTotalCompra;

      if (num == 15 || num == 20 || num == 25 || num == 30 || num == 40 || num == 50 || num == 60 || num == 70 || num == 75 || num == 80 || num == 90 || num == 100 || num == 125 || num == 150 || num == 175 || num == 200) {

        var datos = { porcentaje: num, precioVentaNeto: this.precioVentaNeto, IVA: this.ivaSinRecargo, IvaCant: this.ivaVenta, PVP: this.PVP, Beneficio: this.beneficioTotal };

        this.datosRetorno.push(datos);

      }
      num = num + 5;
    }

  }



}