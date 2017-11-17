import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActionService } from './action.service';
import { Guild } from './guild';

@Injectable()
export class GuildService {

  constructor(private actionService: ActionService) { }

  getGuildsummary(realm: string, name: string): Observable<Guild> {
    return this.actionService.getApi(`guild/${realm}/${name}`, 'members');
  }
}
