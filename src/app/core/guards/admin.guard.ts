import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../facades/auth.facade';

export const adminGuard: CanActivateFn = () =>{
const authFacade = inject(AuthFacade);
const router = inject(Router);

if (!authFacade.usuarioLogado()) {
return router.createUrlTree(['/login']);
}

if (!authFacade.admin()) {
return router.createUrlTree(['/acesso-negado']);
}

// Se estiver logado e for admin, libera o acesso.
return true;
};
