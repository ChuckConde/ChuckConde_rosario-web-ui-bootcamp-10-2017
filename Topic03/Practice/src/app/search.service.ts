import { Injectable } from '@angular/core';
import { Http, ResponseType, ResponseContentType, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  getFileJson(fileJson) {
    return this.http
      .get(fileJson)
      .map(data => data.json());
  }
  getSingleJson(id: number, singleJson: string) {
    return this.http
      .get(`${singleJson}${id}.json`, { responseType: ResponseContentType.Json })
      .map(data => data.json());
  }

}
