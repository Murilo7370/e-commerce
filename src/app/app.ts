import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
//import { RouterOutlet } from '@angular/router'; //remove a importaçao de routerOutlet,pois nao e necessario para o necessario  para este componente
//import { RouterOutlet, RouterLink} from './components/produto/produto';//importando a classe produto do arquivo produto.ts paraser usada no componente app.ts

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Mercado dos lisos';
}
