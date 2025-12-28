import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonCard, IonHeader, IonToolbar, IonTitle, IonCardContent, 
  IonImg, IonItem, IonInput, IonButton, IonText, IonList 
} from '@ionic/angular/standalone';
import { Circulo } from '../clases/figuras';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonCard, IonHeader, IonToolbar, 
    IonTitle, IonCardContent, IonImg, IonItem, IonInput, 
    IonButton, IonText, IonList
  ]
})
export class CirculoComponent {
  radio: number = 0;
  resultado: string = "";

  calcular() {
    const fig = new Circulo(this.radio);
    this.resultado = `El perímetro es: ${fig.calcularPerimetro().toFixed(2)} cm`;
  }
}