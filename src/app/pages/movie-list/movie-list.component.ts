import { Component, OnInit } from '@angular/core';
import {NgStyle} from '@angular/common';
import {StarRatingComponent} from '../star-rating/star-rating.component';
import {MovieServiceService} from '../../services/movie-service.service';

declare const UIkit: any;

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
    UIkit.modal('#modal-loading').show();

    setTimeout( () => {
      this.movieService.getMovies().subscribe({
        next: (json) => {
          console.log(json);
          this.movies = json.data;
        },
        error: (error) => {}
      });
      UIkit.modal('#modal-loading').hide();
    }, 1500);

  }
  }
