import { Injectable } from '@angular/core';
import { ActionService } from './action.service';
import { Race } from './race';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClassService {

  constructor(private actionService: ActionService) { }
  getClass(): Observable<any> {
    return this.actionService.getApi('data/character/classes');
  }
}
