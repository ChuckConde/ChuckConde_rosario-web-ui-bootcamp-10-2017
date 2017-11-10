import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Pvp3v3 } from './pvp3v3';
@Injectable()
export class Pvp3v3Service {

  constructor(private http: Http) { }

  getPvp3v3list(): Observable<Pvp3v3[]> {
    return this.http
      .get('https://us.api.battle.net/wow/leaderboard/3v3?locale=en_US&apikey=vea6t763r459b2b6s5mb89rb2envt4fh')
      .map(data => data.json());
  }

}
