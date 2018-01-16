import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { MovieDBService } from '../services/movie-db.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})

export class DiscoverComponent implements OnInit {

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
    this.titleService.setTitle('Descobrir novos filmes');
  }

  ngOnInit() {
    this.yearsList = this.DBService.getYears();

    this.sortByList = [
      { key: 'popularity.asc', value: 'Popularidade (Menor)' },
      { key: 'popularity.desc', value: 'Popularidade (Maior)' },
      { key: 'vote_count.asc', value: 'Avaliação (Pior)' },
      { key: 'vote_count.desc', value: 'Avaliação (Melhor)' },
      { key: 'primary_release_date.desc', value: 'Lançamento (Novo)' },
      { key: 'primary_release_date.asc', value: 'Lançamento (Antigo)' }
    ];
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
