import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompartilhadoModule } from './../../../compartilhado.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErroComponent } from './mensagem-erro.component';

describe('MensagemErroComponent', () => {
  let component: MensagemErroComponent;
  let fixture: ComponentFixture<MensagemErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemErroComponent ],
      imports: [ CompartilhadoModule ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
