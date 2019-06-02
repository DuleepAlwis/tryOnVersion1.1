import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService:AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers:req.headers.set('Authorization',"Bearer "+authToken)
        });
        console.log(authRequest);
        return next.handle(authRequest);
    }
}
