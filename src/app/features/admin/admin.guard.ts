import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../facades/auth.facade';

export const adminGuard: CanActivateFn = () => {
const authFacade = inject(AuthFacade);
const router = inject(Router);

if (!AuthFacade.estaLogado()) {
return router.createUrlTree(['/login']);
}

if (!AuthFacade.ehAdmin()){
return router.createUrlTree(['/acesso-negado']);
}

return true;
};