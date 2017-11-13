import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Realms } from './realms';
@Injectable()
export class RealmsService {

  constructor(private http: Http) { }

  getRealmslist(): Observable<Realms[]> {
    return this.http
      .get('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=vea6t763r459b2b6s5mb89rb2envt4fh')
      .map(data => data.json());
  }

}
