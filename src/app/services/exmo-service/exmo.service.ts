import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {EXMO_SERVICE_CONFIG} from "./exmo.service.config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ExmoService {

  private apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = EXMO_SERVICE_CONFIG.apiUrl;
  }

  getTicker(): Observable<any> {
    return this.http.get(this.apiUrl.baseUrl + this.apiUrl.ticker)
  }
}
