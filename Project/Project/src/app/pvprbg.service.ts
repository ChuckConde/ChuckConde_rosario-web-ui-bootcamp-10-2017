import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Pvprbg } from './pvprbg';

@Injectable()
export class PvprbgService {

  constructor(private http: Http) { }

  getPvprbglist(): Observable<Pvprbg[]> {
    return this.http
      .get('https://us.api.battle.net/wow/leaderboard/rbg?locale=en_US&apikey=vea6t763r459b2b6s5mb89rb2envt4fh')
      .map(data => data.json());
  }
}
