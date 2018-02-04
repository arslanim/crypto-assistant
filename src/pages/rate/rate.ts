import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExmoService} from "../../app/services/exmo-service/exmo.service";

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage implements OnInit {

  public ratePairs = [];
  public selectedPair: string;
  public ticker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private exmoService: ExmoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

  ngOnInit() {
    this.exmoService.getTicker().subscribe(
      (data) => {
        this.prepareRatePares(data);
      }
    );
  }

  prepareRatePares(data: any) {
    for (let pair in data) {
      this.ratePairs.push(pair);
    }
  }

  onChangePair(value: string) {
    this.exmoService.getTicker().subscribe(
      (data) => {
        this.ticker = data[value];
        console.log(this.ticker);
      }
    );
  }
}
