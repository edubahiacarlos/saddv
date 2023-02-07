import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
  export class TesteComponent {
    mostrar: boolean = false;
    obj: any = { tema1: 'tema1', tema2: 'tema2',  };

    trocar() {
      this.mostrar = !this.mostrar;
    }

    classe() {
      return this.obj['tema3']
    }
}
