import {Component, Input} from '@angular/core';

@Component({
  selector: 'rate',
  templateUrl: 'rate.html'
})
export class RateComponent {

  @Input() rate: any;

  constructor() { }

}
