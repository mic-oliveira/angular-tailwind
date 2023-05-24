import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private readonly _router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')) {
      const clonedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      });
      return next.handle(clonedRequest).pipe(
          catchError((error: HttpErrorResponse):  Observable<HttpEvent<any>> => {
            if (error.status === 401) {
              // redirecionar para a tela de login
              this._router.navigate(['']).then();
            }
            return throwError(error);
          })
      ) as Observable<HttpEvent<any>>;
    } else {
      return next.handle(request);
    }
  }
}
