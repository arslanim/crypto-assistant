import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpEvent} from "@angular/common/http";
import { EXMO_SERVICE_CONFIG } from "./exmo.service.config";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Rate} from "../../models/rate.model";

@Injectable()
export class ExmoService {

  private apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = EXMO_SERVICE_CONFIG.apiUrl;
  }

  getRatePairs(): Observable<string[]> {
    return this.http.get('./assets/test-data/ticker.json').map(
      (response: any) => {
        let ratePairs = [];

        for (let rateName in response) {
          ratePairs.push(rateName);
        }

        return ratePairs;
      }
    );
  }

  getRateByName(rateName: string): Observable<Rate> {
    //return this.http.get(this.apiUrl.baseUrl + this.apiUrl.ticker)
    return this.http.get('./assets/test-data/ticker.json').map(
      (response) => {
        let rate: Rate;

        for (let name in response) {
          if (name === rateName) {
            rate = new Rate().deserialize(response[name]);
            rate.name = name;
          }
        }

        return rate;
      }
    );
  }
}
