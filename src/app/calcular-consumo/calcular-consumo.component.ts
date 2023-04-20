import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-consumo',
  templateUrl: './calcular-consumo.component.html',
  styleUrls: ['./calcular-consumo.component.css']
})
export class CalcularConsumoComponent {
  numMoradores: number=0;
  numComodos: number=0;
  temMaquina: string="Não";
  temSecadora: string="Não";
  numTV: number=0;
  numPC: number=0;
  valorTarifa: number=0;
  consumoEletrico: number=0;
  valorConta: number=0;

  calcular(){
        const consumoChuveiro = (this.numMoradores * 3.5) * (10 / 60);
        const consumoLampada = (this.numComodos * 0.01) * 8;
        const consumoMaquina = this.temMaquina === "Sim" ? 0.70 : 0;
        const consumoSecadora = this.temSecadora === "Sim" ? 4 : 0;
        const consumoTV = this.numTV * 0.12;
        const consumoPC = this.numPC * 0.6; 
    
        const consumoTotal = consumoChuveiro + consumoLampada + consumoMaquina + consumoSecadora + consumoTV + consumoPC;
    
        const consumoMensal = consumoTotal * 30;
    
        this.valorConta = consumoMensal * this.valorTarifa;
    
        this.consumoEletrico = consumoMensal;
    }
}
