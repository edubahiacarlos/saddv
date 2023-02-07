import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CompartilhadoModule } from './../../compartilhado/compartilhado.module';
import { AutorizadoGuard } from './../../guarda/autorizado.guard';
import { AutenticadoGuard } from './../../guarda/autenticado.guard';
import { UsuarioResolver } from './../resolver/usuario.resolver';
import { UsuarioComponent } from './../usuario/usuario.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioModule } from './../usuario.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioFormComponent } from './usuario-form.component';

describe('UsuarioFormComponent', () => {
  let component: UsuarioFormComponent;
  let fixture: ComponentFixture<UsuarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompartilhadoModule, HttpClientTestingModule, RouterTestingModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
