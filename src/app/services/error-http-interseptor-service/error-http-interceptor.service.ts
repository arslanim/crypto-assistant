import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { EVENTS } from "../../configs/events";
import { HttpErrorEvent } from "../../models/events/HttpErrorEvent";
import { MAP } from "../../configs/error-messages-map";

@Injectable()
export class ErrorHttpInterceptorService {

  private errors = [];

  constructor() {
    EVENTS.onClearError.subscribe({
      next: () => {this.clearErrors()}
    });
  }

  addError(error: HttpErrorResponse) {
    this.errors.push(error);

    let event = new HttpErrorEvent();
    event.message = this.getErrorText(error.statusText);

    EVENTS.onAddError.emit(event);

    console.log(this.errors);
  }

  clearErrors() {
    this.errors = [];
  }

  getErrorText(statusText: string): string {
    let text = '';

    MAP.forEach((value) => {
      if (value.statusText == statusText) {
        text = value.text;
      }
    });

    return text;
  }
}
