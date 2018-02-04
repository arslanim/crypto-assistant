import {ErrorHandler} from "@angular/core";

export class CustomErrorHandlerService implements ErrorHandler{

  handleError(error: any): void {
    console.log('some error');
  }

}
