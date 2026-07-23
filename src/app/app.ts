import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
//import { RouterOutlet } from '@angular/router'; //remove a importaçao de routerOutlet,pois nao e necessario para o necessario  para este componente
import { usuarioLogado,login,logout } from './core/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Mercado dos lisos';
  usuarioLogado =usuarioLogado;
  login =login;
  logout =logout;
}
