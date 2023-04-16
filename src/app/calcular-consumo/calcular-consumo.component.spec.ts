import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularConsumoComponent } from './calcular-consumo.component';

describe('CalcularConsumoComponent', () => {
  let component: CalcularConsumoComponent;
  let fixture: ComponentFixture<CalcularConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularConsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
