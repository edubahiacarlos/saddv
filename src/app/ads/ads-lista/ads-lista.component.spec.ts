import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdsModule } from './../ads.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsListaComponent } from './ads-lista.component';

describe('AdsListaComponent', () => {
  let component: AdsListaComponent;
  let fixture: ComponentFixture<AdsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsListaComponent ],
      imports: [ AdsModule, RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
