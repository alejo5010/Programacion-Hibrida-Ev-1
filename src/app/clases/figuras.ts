// Clase abstracta base 
export abstract class FiguraGeometrica {
  constructor(public nombre: string) {}
  abstract calcularPerimetro(): number; 
}

// Clase para el Círcul
export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super('Círculo');
  }
  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

// Clase para el Triángulo 
export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(public ladoA: number, public ladoB: number, public ladoC: number) {
    super('Triángulo Escaleno');
  }
  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}