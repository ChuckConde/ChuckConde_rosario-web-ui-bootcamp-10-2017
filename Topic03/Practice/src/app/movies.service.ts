import { Injectable } from '@angular/core';
import { ResponseType, ResponseContentType, Response } from '@angular/http';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActionService } from './action.service';

@Injectable()
export class MoviesService {

  constructor(private actionService: ActionService) { }

  getMovies(): Observable<any>{
  return this.actionService.getAction('/assets/movies.json');
  }
  getMovie(id: number) {
    return this.actionService.getAction(`/assets/movie${id}.json`);
  }
}
