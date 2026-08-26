import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../facades/auth.facade';

export const adminGuard: CanActivateFn = () => {
const authFacade = inject(AuthFacade);
const router = inject(Router);

// Primeiro verifica se o usuário está logado.
// Se não estiver, envia para a tela de login.

if (!authFacade.usuarioLogado()) {
return router.createUrlTree(['/login']);
}
if (!authFacade.admin()) {
return router.createUrlTree(['/acesso-negado']);
}
// Se estiver logado e for admin, libera o acesso.
return true;
};
