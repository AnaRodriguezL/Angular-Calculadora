import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  titulo: string = 'Calculadora Sencilla';
  operandoA!: number;
  operandoB!: number;
  resultado!: number;

  onSumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

  onRestar(): void {
    if (this.operandoA > this.operandoB) {
      this.resultado = this.operandoA - this.operandoB;
    } else {
      this.resultado = this.operandoB - this.operandoA;
    }
  }

  onDividir(): void {
    if (this.operandoA == 0 || this.operandoB == 0) {
      alert('Reemplace el valor de 0');
    } else {
      if (this.operandoA > this.operandoB) {
        this.resultado = this.operandoA - this.operandoB;
      } else {
        this.resultado = this.operandoB - this.operandoA;
      }
    }
  }

  onMultiplicar(): void {
    this.resultado = this.operandoA * this.operandoB;
  }
}
