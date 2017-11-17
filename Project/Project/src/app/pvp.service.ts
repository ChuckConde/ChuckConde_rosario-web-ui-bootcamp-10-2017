import { Injectable } from '@angular/core';
import { ActionService } from './action.service';

@Injectable()
export class PvpService {

  constructor(private actionService: ActionService) { }

  getPvplist() {
    return this.actionService.getApi('leaderboard/2v2');
  }

}
