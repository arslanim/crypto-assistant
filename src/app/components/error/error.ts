import { Component } from '@angular/core';
import { EVENTS } from "../../configs/events";
import { BaseEvent } from "../../models/events/BaseEvent";

@Component({
  selector: 'error',
  templateUrl: 'error.html'
})
export class ErrorComponent {

  message: string;

  constructor() {
    EVENTS.onAddError.subscribe({
      next: (event) => {
        this.showError(event);
        setTimeout(() => {this.clearError()}, 5000);
      }
    });
  }

  clearError() {
    this.message = '';
    EVENTS.onClearError.emit();
  }

  showError(event: BaseEvent) {
    this.message = event.message;
  }

}
