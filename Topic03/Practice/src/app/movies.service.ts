import { Injectable } from '@angular/core';
import { Http, ResponseType, ResponseContentType, Response } from '@angular/http';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies(): Observable<Movie[]> {
    return this.http
      .get('/assets/movies.json')
      // I might not be getting this point here
      .map(data => data.json());
  }
  getMovie(id: number) {
    return this.http
      .get(`/assets/movie${id}.json`, { responseType: ResponseContentType.Json })
      .map(data => data.json());
  }
}
