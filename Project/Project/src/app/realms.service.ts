import { Injectable } from '@angular/core';
import { ActionService } from './action.service';
@Injectable()
export class RealmsService {

  constructor(private actionService: ActionService) { }

  getRealmslist() {
    return this.actionService.getApi('realm/status');
  }
}
