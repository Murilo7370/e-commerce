import { Component, signal, computed, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { produtosService } from '../../../core/services/produtos.service';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto,MatButtonModule,],
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
        this.carrinhoFacade.adicionarProduto(produto);
        ;
      }
    
}