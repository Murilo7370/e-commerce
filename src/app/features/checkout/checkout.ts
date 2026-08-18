import { Component, inject , Signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { Validators } from '@angular/forms';
import {ValidationErrors} from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
selector: 'app-checkout',
imports: [ReactiveFormsModule],
templateUrl: './checkout.html',
styleUrl: './checkout.css',
})
export class Checkout {
carrinhoService = inject(CarrinhoService);

formulario = new FormGroup({
nome: new FormControl('', [Validators.required, Validators.minLength(3), nomeSemNumeros]),
email: new FormControl('', [Validators.required, Validators.email]),
endereco: new FormControl('', [Validators.required, Validators.minLength(5)]),
});

finalizar() {
    
    
    if (this.formulario.invalid) {
console.log('Formulário inválido');
return;
}

const dados = this.formulario.value;
const itens = this.carrinhoService.itens();
console.log('Dados do formulário:', this.formulario.value);
console.log('Itens do carrinho:', this .carrinhoService.itens());
 }
}

function nomeSemNumeros(control: AbstractControl): ValidationErrors | null {
const valor = control.value;
if (!valor) return null;
if (/\d/.test(valor)) {
return { numeroInvalido: true };
}
return null;
}
