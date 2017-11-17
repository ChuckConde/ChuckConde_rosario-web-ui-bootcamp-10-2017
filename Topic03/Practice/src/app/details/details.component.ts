import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie?: Movie;
  editSummary: boolean = false;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }
  private getMovie(id: number): void {
    this.moviesService.getMovie(id).subscribe(movie => {
      this.movie = movie;
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.getMovie(id);
    });
  }
  clickEdit(): void {
    this.editSummary = !this.editSummary;
  }
}
