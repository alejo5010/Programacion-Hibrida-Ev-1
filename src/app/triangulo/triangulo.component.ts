import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonCard, IonHeader, IonToolbar, IonTitle, IonCardContent, 
  IonImg, IonInput, IonButton, IonItem, IonText, IonList 
} from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../clases/figuras';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonCard, IonHeader, IonToolbar, 
    IonTitle, IonCardContent, IonImg, IonInput, IonButton, 
    IonItem, IonText, IonList
  ]
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: string = "";

  calcular() {
    const fig = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    const perimetro = fig.calcularPerimetro();
    this.resultado = `El perímetro es ${perimetro}`;
  }
}