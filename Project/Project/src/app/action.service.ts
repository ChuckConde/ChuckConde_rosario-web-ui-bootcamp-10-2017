import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ActionService {

  host = 'https://us.api.battle.net/wow/';
  locale = 'en_US';
  apiKey = 'vea6t763r459b2b6s5mb89rb2envt4fh';
  constructor(private _http: Http) { }

  getApi(endpoint, ...fields) {

    const url = this.host + endpoint;

    const params = new URLSearchParams();
    const fieldsArray = Array.from(fields);
    const fieldsString = fieldsArray.join('+');

    params.set('locale', this.locale);
    params.set('apikey', this.apiKey);
    params.set('fields', fieldsString);

    const requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this._http.get(url, requestOptions)
      .map(res => res.json());
  }
}
