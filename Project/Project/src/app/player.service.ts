import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActionService } from './action.service';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private actionService: ActionService) { }

  getPlayersummary(realm: string, name: string): Observable<Player> {
    return this.actionService.getApi(`character/${realm}/${name}`, 'guild', 'items', 'pvp', 'stats');
  }

}
