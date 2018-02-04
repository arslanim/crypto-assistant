import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import { ErrorHttpInterceptorService } from "../services/error-http-interseptor-service/error-http-interceptor.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  private name = 'ErrorHttpInterceptor';

  constructor(private errorHttpInterceptorService: ErrorHttpInterceptorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request intercepted by ', this.name);

    return next.handle(req).do(
      (event: HttpEvent<any>) => {},
      (error: HttpErrorResponse) => {
        this.errorHttpInterceptorService.addError(error);
      }
    );
  }

}
