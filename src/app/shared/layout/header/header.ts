import {  Component  } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule,MatToolbarModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Mercado dos lisos';
  private carrinhoService = inject(CarrinhoService);
  private authService = inject(AuthService);
  private router = inject(Router);

  quantidade = this.carrinhoService.quantidadeItens;
  estaLogado = this.authService.estaLogado;
usuarioAtual = this.authService.usuarioAtual;
sair() {
this.authService.logout();
this.router.navigateByUrl('/login');
}
}
