import { AdService } from './../servico/ad.service';
import { FormControl, Validators } from '@angular/forms';
import { Ad } from 'src/app/ads/model/ad';
import { Observable, of, switchMap, map } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AdsModule } from './../ads.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdsFormComponent } from './ads-form.component';

import { Router, ActivatedRoute, ResolveStart } from '@angular/router';

describe(AdsFormComponent.name, () => {
  let component: AdsFormComponent;
  let fixture: ComponentFixture<AdsFormComponent>;
  let servico: AdService;
  let httpControle: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdsModule, RouterTestingModule, HttpClientTestingModule, NoopAnimationsModule ],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot : { data: { ad : { id: 1 }} }}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsFormComponent);
    component = fixture.componentInstance;
    servico = TestBed.inject(AdService);
    httpControle = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it(`#${AdsFormComponent.prototype.mensagemErro.name} => Deve retornar a mensagem: O campo é obrigatório `, () => {
    const mensagem = component.mensagemErro(new FormControl('', [ Validators.required ]), ['required']);
    expect('Campo Obrigatório.').toEqual(mensagem);
  });

  it(`#${AdsFormComponent.prototype.mensagemErro.name} => Deve retornar um valor vazio.`, () => {
    const mensagem = component.mensagemErro(new FormControl('Valor do Campo', [ Validators.required ]), ['required']);
    expect('').toEqual(mensagem);
  });

  it(`#${AdsFormComponent.prototype.salvar.name}
      => Deve retornar o objeto criado no serviço, quando salvar os dados.
     `, () => {


    //  component.salvar()

    expect('').toEqual('a');
  });

});
