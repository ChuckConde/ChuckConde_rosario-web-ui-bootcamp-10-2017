import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Pvp } from './pvp';
@Injectable()
export class PvpService {

  constructor(private http: Http) { }

  getPvplist(): Observable<Pvp[]> {
    return this.http
      .get('https://us.api.battle.net/wow/leaderboard/2v2?locale=en_US&apikey=vea6t763r459b2b6s5mb89rb2envt4fh')
      .map(data => data.json());
  }

}
