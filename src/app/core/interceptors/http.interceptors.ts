import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";
import { catchError } from "rxjs";
import { throwError } from "rxjs";

export const httpIntercptor: HttpInterceptorFn = (req, next) => {

    console.log('Interceptando Requisiçao:' , req.url);
    const token = 'fake-token-jwt';

    const novaReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });
    return next(novaReq).pipe(
        tap({
            next: (event) => console.log('Responde: ', event),
            error: (error) => console.error('Erro de Requisiçao:', error )
        }),
        catchError((error) =>{
            console.error('ERRO GLOBAL:', error);
            if (error.status === 401){
                console.warn('Erro de requisiçao global!', error);
            }
            if (error.status === 500){
                console.warn('Erro interno do servidor!', error);
            }
            return throwError(() => error);
        }),

    );

};