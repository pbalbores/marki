import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicio1.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  precioCompra: number;
  ivaCompra: number;
  recargo: string = "NON";


  constructor(public servicio: Servicio1Service) { }

  precioTotalCompra: number;
  datos: any;

  ngOnInit(): void {
  }
  calcularenServicio() {
    this.servicio.calcular(this.precioCompra, this.ivaCompra, this.recargo)
    this.precioTotalCompra = this.servicio.precioTotalCompra;
    this.datos = this.servicio.datosRetorno;
  }

}



