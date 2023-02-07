import { AdService } from './../../ads/servico/ad.service';
import { CompartilhadoModule } from './../../compartilhado/compartilhado.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorListaComponent } from './consultor-lista.component';

describe('ConsultorListaComponent', () => {
  let component: ConsultorListaComponent;
  let fixture: ComponentFixture<ConsultorListaComponent>;
  let s: AdService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompartilhadoModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
