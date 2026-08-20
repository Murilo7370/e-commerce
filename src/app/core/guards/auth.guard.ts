import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authFacade,} from '../facades/auth.facade';

export const authGuard: CanActivateFn = () => {
const authFacade = inject(authFacade);
const router = inject(Router);

if (authFacade.estaLogado()) {
return true;
}

return router.createUrlTree(['/login']);
};
