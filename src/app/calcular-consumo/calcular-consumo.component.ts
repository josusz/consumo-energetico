import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-consumo',
  templateUrl: './calcular-consumo.component.html',
  styleUrls: ['./calcular-consumo.component.css']
})
export class CalcularConsumoComponent {
  numMoradores: number=0;
  numComodos: number=0;
  numMaquina: number=0;
  numSecadora: number=0;
  numTV: number=0;
  numPC: number=0;
  valorTarifa: number=0;
  consumoEletrico: number=0;
  valorConta: number=0;

  calcular(){
    
  }
}
