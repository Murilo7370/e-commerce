import { Component } from '@angular/core';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-carrinho',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {}
//! Logica de carrinho vira na proximas aulas
//! Por ora, apenas exibe a pagina carrinho
