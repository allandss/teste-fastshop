import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDBService } from '../services/movie-db.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  movieId: string;
  movie: any;
  index: number;

  constructor(private route: ActivatedRoute,
    private dbService: MovieDBService ){

    this.movieId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getMovieDetails(this.movieId);
  }

  getMovieDetails(id) {
    this.dbService.getMovieDetails(id).subscribe((res: any) => {
      this.movie = res;
      this.movie.poster_path = `http://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
      this.movie.backdrop_path = `http://image.tmdb.org/t/p/original/${this.movie.backdrop_path}`;
    });
  }
  
}

