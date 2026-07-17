import { Component,Input,Output,EventEmitter, input, output } from '@angular/core';
import{UpperCasePipe, CurrencyPipe } from '@angular/common';
import{PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adicionando a classe Produto com as propriedades produto,preco, mostrandoProduto e mostrarPreco
export class Produto {
  //entrada de dados da lista Produtos em lista-produtos
@Input() nome: string ='';
@Input() preco: number = 0;
//saida de dados de Produtos selecionada para lista-produtos
@Output() produtoSelecionado =new EventEmitter<string>();

selecionarProdutos(){
  this.produtoSelecionado.emit(this.nome);
}
}
