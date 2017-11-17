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
  addMovie(movie: string, url: string, detail: string, made: number, time: string, genre: string, supervisor: string): void {
    const newMovie = new Movie(movie, url, detail, made, time, genre, supervisor);
  }
  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

}
