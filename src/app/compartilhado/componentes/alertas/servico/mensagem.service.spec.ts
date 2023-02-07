import { CompartilhadoModule } from './../../../compartilhado.module';
import { TestBed } from '@angular/core/testing';

import { MensagemService } from './mensagem.service';

describe('MensagemService', () => {
  let service: MensagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CompartilhadoModule ]
    });
    service = TestBed.inject(MensagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
