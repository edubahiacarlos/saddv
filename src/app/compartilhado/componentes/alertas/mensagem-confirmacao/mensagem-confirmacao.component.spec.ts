import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompartilhadoModule } from './../../../compartilhado.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemConfirmacaoComponent } from './mensagem-confirmacao.component';

describe('MensagemConfirmacaoComponent', () => {
  let component: MensagemConfirmacaoComponent;
  let fixture: ComponentFixture<MensagemConfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemConfirmacaoComponent ],
      imports: [ CompartilhadoModule ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
