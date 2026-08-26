import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
    
    private authService = inject (AuthService);

usuarioAtual = this.authService.usuarioAtual;
usuarioLogado = this.authService.estaLogado;
admin = this.authService.ehAdmin;
token = this.authService.token;

realizarLogin(email: string, senha: string) {
    return this.authService.login(email, senha);
}

sair(){
    this.authService.logout();
}

obterToken(){
    return this.authService.obterToken();
    }
    
    obterPerfil(){
        return this.authService.obterPerfil();
    }
}