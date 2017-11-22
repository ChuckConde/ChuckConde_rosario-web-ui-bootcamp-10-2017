import { Injectable } from '@angular/core';
import { ActionService } from './action.service';

@Injectable()
export class Pvp3v3Service {

  constructor(private actionService: ActionService) { }

  getPvp3v3list() {
    return this.actionService.getApi('leaderboard/3v3');
  }

}
