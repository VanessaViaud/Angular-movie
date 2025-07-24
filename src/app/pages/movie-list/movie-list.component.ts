import { Component, OnInit } from '@angular/core';
import {NgStyle} from '@angular/common';
import {StarRatingComponent} from '../star-rating/star-rating.component';
import {MovieServiceService} from '../../services/movie-service.service';


@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle,
    StarRatingComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  movies:any[] = [];


  constructor(private movieService : MovieServiceService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (json) => {
        console.log(json);
        this.movies = json.data;
      },
      error: (error) => {}
    })
  }
}
