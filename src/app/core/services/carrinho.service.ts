import { Injectable , signal , computed } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService {

    //!estado Global

    private carrinho = signal<{nome: string; preco: number}[]>([]);

    //? Seleção

    itens = computed(() =>this.carrinho());
    quantidadeItens = computed(() => this.carrinho().length);
    totalItens = computed (()=>
    this.carrinho().reduce((total, item) => total + item.preco,0));  
    

    //TODO: Açoes Adicionar Produtos

adicionar(produto:{nome:string; preco:number}){
    this.carrinho.update(lista => [...lista, produto]);
}

// TODO: Ação de Limpeza

limpar() {
    this.carrinho.set([]);
}
}

