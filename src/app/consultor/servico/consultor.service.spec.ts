import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConsultorModule } from './../consultor.module';
import { TestBed } from '@angular/core/testing';

import { ConsultorService } from './consultor.service';
import { Consultor } from '../modelo/consultor';

function mockConsultor(): Consultor[] {
  return [
    { id: 1, nome: 'Carlos', sobrenome: 'Souza', email: 'edu', perfilId: 1  },
    { id: 2, nome: 'Joao', sobrenome: 'Souza', email: 'edu', perfilId: 1  },
    { id: 3, nome: 'Maria', sobrenome: 'Souza', email: 'edu', perfilId: 1  },
  ]
}

describe(`${ConsultorService.name}`, () => {
  let service: ConsultorService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConsultorModule, HttpClientTestingModule ]
    }).compileComponents();

    service = TestBed.inject(ConsultorService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('Deve criar o componente', () => {
    expect(service).toBeTruthy();
  });

  it(`#${ConsultorService.prototype.listar.name}`, done => {
    service.listar().subscribe({
      next: (res: Consultor[]) => {
        expect(res[0].nome).toEqual('Carlos');
        done();
      }
    })

    httpController
    .expectOne(service.API)
    .flush(mockConsultor())
  });
});
