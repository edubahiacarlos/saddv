import { PermissaoComponent } from './permissao/permissao.component';
import { HttpClientModule } from '@angular/common/http';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CompartilhadoModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        PermissaoComponent
      ],
    }).compileComponents();
  });

  it('devemos criar o componente app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`devemos ter como título 'saddv' quando sistema iniciar`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual('saddv');
  });

  it("(D) - Devemos verificar se título está na tela", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.usuarioEstaLogado = true;
    fixture.detectChanges();

    const elemento = fixture.nativeElement as HTMLElement;;
     expect(elemento.querySelector('.mat-toolbar .titulo')?.textContent).toContain('saddv');

  });

  it("Devemos ter como nome de usuário logado Carlos", () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    app.usuarioEstaLogado = true;
    app.usuarioLogado.nome = 'Carlos';

    expect(app.usuarioLogado.nome).toEqual('Carlos')
  });

  it('Devemos ter o nome do usuário exibido na tela', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.usuarioEstaLogado = true;
    app.usuarioLogado.nome = 'Carlos'
    fixture.detectChanges();
    const elemento: HTMLElement = fixture.nativeElement;

    expect(elemento.querySelector('.mat-toolbar .teste')?.textContent?.trim()).toEqual('Olá Carlos');
  })
});
