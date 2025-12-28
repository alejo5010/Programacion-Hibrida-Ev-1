import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos los componentes de Ionic que segun material de estudio
import { IonHeader, IonToolbar,   IonContent,   IonSelect,   IonSelectOption,   IonItem,   IonLabel } from '@ionic/angular/standalone';

// IMPORTANTE: Importa componentes de círculo y triángulo 
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  // Agregar todo lo necesario al Lista  de imports
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonSelect, 
    IonSelectOption, 
    IonItem, 
    IonLabel,
    CirculoComponent, // Tu componente de círculo
    TrianguloComponent // Tu componente de triángulo
  ],
})
export class HomePage {
  figuraSeleccionada: string = ""; // Variable para que funcione el [(ngModel)]

  constructor() {}
}