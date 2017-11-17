import { Injectable } from '@angular/core';
import { ActionService } from './action.service';
import { Race } from './race';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RaceService {

  constructor(private actionService: ActionService) { }
  getRace(): Observable<any> {
    return this.actionService.getApi('data/character/races');
  }

}
