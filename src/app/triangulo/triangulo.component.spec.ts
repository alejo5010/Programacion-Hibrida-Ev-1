import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrianguloComponent } from './triangulo.component';
import { provideRouter } from '@angular/router';

describe('TrianguloComponent', () => {
  let component: TrianguloComponent;
  let fixture: ComponentFixture<TrianguloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Al ser un componente Standalone, se importa directamente aquí
      imports: [TrianguloComponent],
     
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TrianguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});