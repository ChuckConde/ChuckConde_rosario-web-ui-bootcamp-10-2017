import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  getPlayersummary(realm: string, name: string): Observable<Player> {
    return this.http
      // tslint:disable-next-line:max-line-length
      .get('https://us.api.battle.net/wow/character/' + realm + '/' + name + '?fields=guild+items+pvp+stats&locale=en_US&apikey=vea6t763r459b2b6s5mb89rb2envt4fh')
      .map(data => data.json());
  }

}
