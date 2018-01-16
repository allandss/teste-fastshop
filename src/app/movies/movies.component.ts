import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { MovieDBService } from '../services/movie-db.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  yearsList: Number[];
  sortByList: any;
  genresList: any;
  options: any;
  itemList: any;

  constructor(private titleService: Title,
    public DBService: MovieDBService,
    private router: Router, ) {
    this.DBService.getGenres().subscribe((res: any) => this.genresList = res.genres);
    this.options = {};
    this.getDiscover();
    this.titleService.setTitle('Filmes populares');
  }

  ngOnInit() {
  }

  getDiscover() {
    this.DBService.getDiscover('movie', this.options).subscribe((res: any) => {
      const placeholderImg = 'http://via.placeholder.com/500x281?text=Fastshop';
      const imgUrl = `http://image.tmdb.org/t/p/w500`;
      this.itemList = res.results.map(item => {
        item.poster_path = item.poster_path ? `${imgUrl}/${item.poster_path}` : placeholderImg;
        item.backdrop_path = item.backdrop_path ? `${imgUrl}/${item.backdrop_path}` : placeholderImg;
        item.title = item.title.length <= 18 ? item.title : item.title = item.title.substr(0, 18) + '...';
        item.overview = item.overview.substr(0, 100) + '...';
        return item;
      });
    });
  }

  like(e, movie) {
    e.stopPropagation();
    alert(movie.title)
  }
  goToMovieDetails(movie) {
    this.router.navigate(['/movie', movie.id]);
  }

}
