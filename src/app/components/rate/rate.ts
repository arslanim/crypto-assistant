import {Component, Input} from '@angular/core';
import { Rate } from "../../models/rate.model";

@Component({
  selector: 'rate',
  templateUrl: 'rate.html'
})
export class RateComponent {

  @Input() rate: Rate;

  constructor() { }

}
