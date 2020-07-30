import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicio1.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  precioCompra: number;
  ivaCompra: number;
  recargo: string = "NON";
  ivaMostrar: number;


  constructor(public servicio: Servicio1Service) { }

  precioTotalCompra: number;
  datos: any;

  ngOnInit(): void {
  }
  calcularenServicio() {
    this.servicio.calcular(this.precioCompra, this.ivaCompra, this.recargo)
    this.precioTotalCompra = this.servicio.precioTotalCompra;
    this.datos = this.servicio.datosRetorno;
    this.ivaMostrar = (this.datos.iva - 1) * 10;

  }

}



