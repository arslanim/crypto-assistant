import {EventEmitter} from "@angular/core";
import { HttpErrorEvent } from "../models/events/HttpErrorEvent";

export const EVENTS = {
  onAddError: new EventEmitter<HttpErrorEvent>(),
  onClearError: new EventEmitter<HttpErrorEvent>()
};
