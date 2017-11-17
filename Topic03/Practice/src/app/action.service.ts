import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActionService {
  constructor(private http: Http) { }

  getAction(url) : Observable<any>{
    return this.http
      .get(url)
      .map(data => data.json());
  }
}