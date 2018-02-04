import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExmoService} from "../../app/services/exmo-service/exmo.service";

/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private exmoService: ExmoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

  ngOnInit() {
    this.exmoService.getTicker().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
