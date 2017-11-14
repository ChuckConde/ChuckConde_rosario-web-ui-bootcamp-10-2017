import { Injectable } from '@angular/core';
import { Http, ResponseType, ResponseContentType, Response } from '@angular/http';
import { SearchService } from './search.service';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MoviesService {

  constructor(private http: Http, private searchService: SearchService) { }
  getMovies(): Observable<Movie[]> {
    return this.searchService.getFileJson('/assets/movies.json');
  }
  // not ready yet
  getMovie(id: number) {
    return this.http
      .get(`/assets/movie${id}.json`, { responseType: ResponseContentType.Json })
      .map(data => data.json());
  }
}
