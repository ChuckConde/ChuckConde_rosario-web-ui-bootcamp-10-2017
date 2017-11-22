import { Injectable } from '@angular/core';
import { ActionService } from './action.service';

@Injectable()
export class PvprbgService {

  constructor(private actionService: ActionService) { }

  getPvprbglist() {
    return this.actionService.getApi('leaderboard/rbg');
  }
}
