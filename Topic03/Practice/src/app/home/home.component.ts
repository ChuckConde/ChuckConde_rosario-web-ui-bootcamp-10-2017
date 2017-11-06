import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  eraseMovie(i: number): void {
    this.movies.splice(i, 1);
  }
  addMovie(movie: string, url: string, detail: string): void {
    const newMovie = {
      id: this.movies.length + 1,
      name: movie,
      poster: url,
      year: 0,
      duration: '',
      type: '',
      summary: detail,
      director: '',
      stars: []
    };
    this.movies.push(newMovie);
  }
  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

}
