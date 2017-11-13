import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Guild } from './guild';

@Injectable()
export class GuildService {

  constructor(private http: Http) { }

  getGuildsummary(realm: string, name: string): Observable<Guild> {
    return this.http
      // tslint:disable-next-line:max-line-length
      .get('https://us.api.battle.net/wow/guild/' + realm + '/' + name + '?fields=members&locale=en_US&apikey=vea6t763r459b2b6s5mb89rb2envt4fh')
      .map(data => data.json());
  }
}
