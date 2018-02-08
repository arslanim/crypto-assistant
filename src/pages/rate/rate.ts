import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExmoService} from "../../app/services/exmo-service/exmo.service";
import {Rate} from "../../app/models/rate.model";

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage implements OnInit {

  public ratePairs = [];
  public selectedPair: string;
  public rate: Rate;

  constructor(public navCtrl: NavController, public navParams: NavParams, private exmoService: ExmoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

  ngOnInit() {
    this.exmoService.getRatePairs().subscribe(
      (ratePairs: string[]) => {
        this.ratePairs = ratePairs;
      }
    );
  }

  onChangePair(rateName: string) {
    this.exmoService.getRateByName(rateName).subscribe(
      (rate: Rate) => {
        this.rate = rate;
      }
    );
  }
}
