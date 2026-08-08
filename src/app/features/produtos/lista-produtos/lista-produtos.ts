import { Component} from '@angular/core';
import {Produto} from '../produto/produto'
import {signal} from '@angular/core'
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { produtosService } from '../../../core/services/produtos.service';
import { inject } from '@angular/core';
import { CarrinhoService } from '../../../core/services/carrinho.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto,PrecoFormatadoPipe,UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  erro = signal <string | null> (null);
 //Lista com dados - Array
  produtos = signal <{nome: string; preco: number}[]>([]);
  carregando = signal(true);
//!funçao para exibir produtos selecionados pelo usuario no console
  exibirProduto(nome: string){
    console.log('Produto Selecionado: ', nome);
    this.produtoSelecionado.set(nome);
  }
  //!funçao que adicionar produto usando metodo update()
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual,
      {nome:'Playstation 5', preco:3000},
     ]);
    }
    //!funçao que contabiliza a quantidade de produtos na lista com metodo computed()
    totalProdutos = computed(() =>this.produtos().length);
    //!funçao que calcula o valor total do produtos usando o metodo computed()
    valorTotal = computed(() => 
    {return this.produtos().reduce((total,item) =>
      total + item.preco,0)});
     //!funçao para substituir a lista atual usando o metodo set()
    substituirProdutos(){
      this.produtos.set([
        {nome:'Teclado', preco:50},
        {nome:'Mouse', preco:15},
        {nome:'Monitor', preco:500},
        {nome:'Desktop', preco:1500},
        {nome:'headest', preco:30},
      ]);
    }
carregarProdutos(){
  this.carregando.set(true);
  this.produtosService.buscarProdutos().subscribe({
    next: (dados) => {
      const produtos = this.produtosService.transformarProdutos(dados);
      this.produtos.set(produtos);
      this.carregando.set(false);
    },
  error: (erro) => {
      console.error('Erro ao carregar produtos: ',erro);
      this.erro.set('Erro o carregar produtos.por favor tente novamente!');
this.carregando.set(false);
    }
  });
   }
    
    //! metodo para monitorar alteraçoes em tempo real usando effect()
    constructor(){
      //! Carrega a API
      this.carregarProdutos();

      //!effect continuam iguais - nao mexer
      effect(() => {
      console.log('Lista de Produtos Alterados', this.produtos())  ;
      });
      effect(() => {
        console.log('Valor Total Atualizado', this.valorTotal());
      });
      effect(() => {
        if (typeof document !== 'undefined'){
          document.title =`(${this.totalProdutos()}) - Loja do Ferreira`;
        }
      });
    }
    //! Metodo para criar um estado de seleçao com signal string | null
    produtoSelecionado = signal <string | null>(null);

      //! metodo para criar um estado de seleçao carrinho com signal
      
      adicionarAoCarrinho(produto:{nome: string; preco: number}){
        this.carrinhoService.adicionar(produto);
        ;
      }
    //!metodo para calcular a quantidade total de itens no carrinho

//!metodo que calcular o valor total dos itens do carrinho

//!metodo que calcular o valor total dos itens do carrinho


private produtosService = inject(produtosService);
public carrinhoService = inject(CarrinhoService);

quantidadeCarrinho = this.carrinhoService.quantidadeItens;
totalCarrinho = this.carrinhoService.totalItens;

}