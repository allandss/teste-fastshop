webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details_movie_details_component__ = __webpack_require__("../../../../../src/app/movie-details/movie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__discover_discover_component__["a" /* DiscoverComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_3__movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'discover', component: __WEBPACK_IMPORTED_MODULE_4__discover_discover_component__["a" /* DiscoverComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_2__movie_details_movie_details_component__["a" /* MovieDetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"logo\">\n          <img src=\"https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg\" alt=\"Logomarca\">\n        </div>\n        <div class=\"nav\">\n          <ul>\n            <a [routerLink]=\"['/discover']\"><li>Explorar</li></a>\n            <a [routerLink]=\"['/movies']\"><li>Filmes</li></a>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"logo\">\n          <img src=\"https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg\" alt=\"Logomarca\">\n        </div>\n        <a class=\"link\" href=\"\">Junte-se a Comunidade</a>\n      </div>\n      <div class=\"col-md-9\">\n        <div class=\"box-nav\">\n          <div class=\"nav-bottom\">\n            <ul>\n              <li class=\"title\">O BÁSICO</li>\n              <li>Sobre o TMDb</li>\n              <li>Contate-nos</li>\n              <li>Suporte</li>\n              <li>API</li>\n              <li>Blog</li>\n              <li>Ajuda</li>\n            </ul>\n          </div>\n          <div class=\"nav-bottom\">\n            <ul>\n              <li class=\"title\">ENVOLVA-SE</li>\n              <li>Bíblia do Colaborador</li>\n              <li>Aplicativos de terceiros</li>\n              <li>Adicionar um novo filme</li>\n              <li>Adicionar uma nova série</li>\n            </ul>\n          </div>\n          <div class=\"nav-bottom\">\n            <ul>\n              <li class=\"title\">COMUNIDADE</li>\n              <li>Colaboradores</li>\n              <li>Fóruns</li>\n              <li>Twitter</li>\n              <li>Facebook</li>\n              <li>Google+</li>\n            </ul>  \n          </div>\n          <div class=\"nav-bottom\">\n            <ul>\n                <li class=\"title\">LEGALIDADE</li>\n                <li>Termos de uso</li>\n                <li>Política de privacidade</li>\n              </ul>  \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movie_details_movie_details_component__ = __webpack_require__("../../../../../src/app/movie-details/movie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_movie_db_service__ = __webpack_require__("../../../../../src/app/services/movie-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__movie_details_movie_details_component__["a" /* MovieDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__discover_discover_component__["a" /* DiscoverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_movie_db_service__["a" /* MovieDBService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/discover/discover.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin-bottom: 20px;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.discover-filters select {\n    display: inline-block;\n    width: 100%;\n}\n\n.item {\n    background: #fff;\n    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n            box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    margin-bottom: 23px;\n}\n\n.item .info {\n    padding: 15px 15px 15px 0px;;\n}\n\n.item .info .title{\n    float: left;\n    width: 75%;\n    font-size: 1.1em;\n}\n\n.item .info .vote_average{\n    width: 25%;\n    float: left;\n    text-align: right;\n    font-size: 1.1em;\n}\n\n.item .col-5 {\n    padding-right: 0px; \n}\n\n.card-img {\n    border-radius: 0px; \n}\n\n.item .info .vote_average span svg {\n    font-size: 15px;\n    height: 18px;\n}\n\n.item .info .year{\n    font-size: 14px;\n    color: #656565;\n}\n\n.item .info p {\n    color: #4d4d4d;\n    font-size: 0.9em;\n    line-height: 1.2em;\n    padding-top: 20px;\n}\n\n.item .more {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    margin-left: -15px;\n    background: #fff;\n    width: calc(100% - 15px);\n}\n\n.item .more a{\n    border-top: 1px solid #e3e3e3;\n    display: block;\n    padding: 15px;\n    color: #000;\n    font-size: 14px;\n}\n\n.item .more a:hover{\n    text-decoration: none;\n}\n\n.card-img {\n    width: 100%;\n    min-height: 200px;\n}\n\n@media (max-width: 992px) {\n    .info p {\n        padding-top: 0px !important; \n        float: left;\n        width: 100%;\n    }\n\n    .year {\n        display: none;\n    }\n\n    .item .info .title{\n        width: 68%;\n        margin-bottom: 5px;\n        font-size: 16px;\n        font-weight: 600;\n    }\n    \n    .item .info .vote_average{\n        width: 32%;\n    }\n\n    .item .more a  {\n        padding: 8px 15px;\n        font-size: 13px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discover/discover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"movies\">   \n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h2>Descobrir novos filmes</h2>\n        </div>\n      </div>\n      <div class=\"discover-filters\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"sel1\">Ano</label>\n              <select [(ngModel)]=\"options.primary_release_year\" placeholder=\"Year\" (change)=\"getDiscover()\" class=\"form-control\"id=\"sel1\">\n                <option *ngFor=\"let year of yearsList\" [value]=\"year\">{{year}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"sel2\">Ordenar por</label>\n              <select [(ngModel)]=\"options.sort_by\" placeholder=\"Sory By\" (change)=\"getDiscover()\" class=\"form-control\" id=\"sel2\">\n                <option *ngFor=\"let sort of sortByList\" [value]=\"sort.key\">{{sort.value}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\"> \n            <div class=\"form-group\">\n              <label for=\"sel3\">Filtrar por gênero</label>\n              <select [(ngModel)]=\"options.with_genres\" (change)=\"getDiscover()\" class=\"form-control\" id=\"sel3\">\n                <option *ngFor=\"let genres of genresList\" [value]=\"genres.id\">{{genres.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let movie of itemList\" (click)=\"goToMovieDetails(movie)\">\n          <div class=\"item\">\n            <div class=\"row\"> \n              <div class=\"col-5\">\n                <img [src]=\"movie.poster_path\" class=\"card-img\">\n              </div>\n              <div class=\"col-7\">\n                <div class=\"info\">\n                  <div class=\"top\">\n                    <h3 class=\"title\"> {{ movie.title }}</h3>\n                    <h4 class=\"vote_average\">{{movie.vote_average}} <span><i class=\"fas fa-star\"></i></span></h4>\n                  </div>\n                  <h4 class=\"year\"><i class=\"far fa-calendar-alt\"></i> {{ movie.release_date | date: 'yyyy'}}</h4>\n                  <p>\n                    {{movie.overview}}\n                  </p>\n                </div>\n                <div class=\"more\">\n                  <a [routerLink]=\"['/movie', movie.id]\">Mais informações</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/discover/discover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_db_service__ = __webpack_require__("../../../../../src/app/services/movie-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent(titleService, DBService, router) {
        var _this = this;
        this.titleService = titleService;
        this.DBService = DBService;
        this.router = router;
        this.DBService.getGenres().subscribe(function (res) { return _this.genresList = res.genres; });
        this.options = {};
        this.getDiscover();
        this.titleService.setTitle('Descobrir novos filmes');
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.yearsList = this.DBService.getYears();
        this.sortByList = [
            { key: 'popularity.asc', value: 'Popularidade (Menor)' },
            { key: 'popularity.desc', value: 'Popularidade (Maior)' },
            { key: 'vote_count.asc', value: 'Avaliação (Pior)' },
            { key: 'vote_count.desc', value: 'Avaliação (Melhor)' },
            { key: 'primary_release_date.desc', value: 'Lançamento (Novo)' },
            { key: 'primary_release_date.asc', value: 'Lançamento (Antigo)' }
        ];
    };
    DiscoverComponent.prototype.getDiscover = function () {
        var _this = this;
        this.DBService.getDiscover('movie', this.options).subscribe(function (res) {
            var placeholderImg = 'http://via.placeholder.com/500x281?text=Fastshop';
            var imgUrl = "http://image.tmdb.org/t/p/w500";
            _this.itemList = res.results.map(function (item) {
                item.poster_path = item.poster_path ? imgUrl + "/" + item.poster_path : placeholderImg;
                item.backdrop_path = item.backdrop_path ? imgUrl + "/" + item.backdrop_path : placeholderImg;
                item.title = item.title.length <= 18 ? item.title : item.title = item.title.substr(0, 18) + '...';
                item.overview = item.overview.substr(0, 100) + '...';
                return item;
            });
        });
    };
    DiscoverComponent.prototype.like = function (e, movie) {
        e.stopPropagation();
        alert(movie.title);
    };
    DiscoverComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    DiscoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-discover',
            template: __webpack_require__("../../../../../src/app/discover/discover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discover/discover.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_5__services_movie_db_service__["a" /* MovieDBService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movie-details/movie-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".movie-details {\n    color: #fff;\n}\n\n.custom {\n    background-image: radial-gradient(circle at 20% 50%, rgba(0%, 0%, 0%, 0.8) 0%, rgba(0%, 0%, 0%, 0.58) 100%);\n    padding: 100px 0px;\n}\n\nh2 {\n    font-size: 2.4em;\n    line-height: 1.1em;\n    font-weight: 700;\n    display: inline-block;\n}\n\nh2 span {\n    font-weight: 500;\n    font-size: 29px;\n    color: #aaa;\n}\n\nh3 {\n    margin-top: 50px;\n    font-size: 22px;\n    font-weight: 600;\n}\n\n.genres {\n    display: inline-block;\n    margin-right: 20px;\n    margin-top: 15px;\n    border: 1px solid #fff;\n    padding: 3px 20px;\n    border-radius: 40px;\n    font-size: 14px;\n}\n\n@media (max-width: 768px) {\n    h2 {\n        margin-top: 40px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-details/movie-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div *ngIf=\"movie\" class=\"movie-details\">\n    <div [style.background-image]=\"'url(' + movie.backdrop_path + ')'\" class=\"movie-img\">\n      <div class=\"custom\">\n        \n        <div (selectChange)=\"selectChange()\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <img [src]=\"movie.poster_path\" class=\"img-fluid\">\n              </div>\n              <div class=\"col-md-8\">\n                <h2>{{movie.title}} <span>( {{ movie.release_date | date: 'yyyy'}} )</span></h2>\n                <h3>Sinopse</h3>\n                <p>{{movie.overview}}</p>\n                <p class=\"genres\" *ngFor=\"let genre of movie.genres\">{{genre.name}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/movie-details/movie-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_db_service__ = __webpack_require__("../../../../../src/app/services/movie-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, dbService) {
        this.route = route;
        this.dbService = dbService;
        this.movieId = route.snapshot.paramMap.get('id');
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        this.getMovieDetails(this.movieId);
    };
    MovieDetailsComponent.prototype.getMovieDetails = function (id) {
        var _this = this;
        this.dbService.getMovieDetails(id).subscribe(function (res) {
            _this.movie = res;
            _this.movie.poster_path = "http://image.tmdb.org/t/p/w500/" + _this.movie.poster_path;
            _this.movie.backdrop_path = "http://image.tmdb.org/t/p/original/" + _this.movie.backdrop_path;
        });
    };
    MovieDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-details',
            template: __webpack_require__("../../../../../src/app/movie-details/movie-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movie-details/movie-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_movie_db_service__["a" /* MovieDBService */]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin-bottom: 20px;\n    font-size: 24px;\n    font-weight: 600;\n}\n\n.item {\n    background: #fff;\n    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n            box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    margin-bottom: 23px;\n}\n\n.item .info {\n    padding: 15px 15px 15px 0px;;\n}\n\n.item .info .title{\n    float: left;\n    width: 75%;\n    font-size: 1.1em;\n}\n\n.item .info .vote_average{\n    width: 25%;\n    float: left;\n    text-align: right;\n    font-size: 1.1em;\n}\n\n.item .col-5 {\n    padding-right: 0px; \n}\n\n.card-img {\n    border-radius: 0px; \n}\n\n.item .info .vote_average span svg {\n    font-size: 15px;\n    height: 18px;\n}\n\n.item .info .year{\n    font-size: 14px;\n    color: #656565;\n}\n\n.item .info p {\n    color: #4d4d4d;\n    font-size: 0.9em;\n    line-height: 1.2em;\n    padding-top: 20px;\n}\n\n.item .more {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    margin-left: -15px;\n    background: #fff;\n    width: calc(100% - 15px);\n}\n\n.item .more a{\n    border-top: 1px solid #e3e3e3;\n    display: block;\n    padding: 15px;\n    color: #000;\n    font-size: 14px;\n}\n\n.item .more a:hover{\n    text-decoration: none;\n}\n\n.card-img {\n    width: 100%;\n    min-height: 200px;\n}\n\n@media (max-width: 992px) {\n    .info p {\n        padding-top: 0px !important; \n        float: left;\n        width: 100%;\n    }\n\n    .year {\n        display: none;\n    }\n\n    .item .info .title{\n        width: 68%;\n        margin-bottom: 5px;\n        font-size: 16px;\n        font-weight: 600;\n    }\n    \n    .item .info .vote_average{\n        width: 32%;\n    }\n\n    .item .more a  {\n        padding: 8px 15px;\n        font-size: 13px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"movies\">   \n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <h2>Filmes populares</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngFor=\"let movie of itemList\" (click)=\"goToMovieDetails(movie)\">\n            <div class=\"item\">\n              <div class=\"row\"> \n                <div class=\"col-4\">\n                  <img [src]=\"movie.poster_path\" class=\"card-img\">\n                </div>\n                <div class=\"col-8\">\n                  <div class=\"info\">\n                    <div class=\"top\">\n                      <h3 class=\"title\"> {{ movie.title }}</h3>\n                      <h4 class=\"vote_average\">{{movie.vote_average}} <span><i class=\"fas fa-star\"></i></span></h4>\n                    </div>\n                    <h4 class=\"year\"><i class=\"far fa-calendar-alt\"></i> {{ movie.release_date | date: 'yyyy'}}</h4>\n                    <p>\n                      {{movie.overview}}\n                    </p>\n                  </div>\n                  <div class=\"more\">\n                    <a [routerLink]=\"['/movie', movie.id]\">Mais informações</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_db_service__ = __webpack_require__("../../../../../src/app/services/movie-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(titleService, DBService, router) {
        var _this = this;
        this.titleService = titleService;
        this.DBService = DBService;
        this.router = router;
        this.DBService.getGenres().subscribe(function (res) { return _this.genresList = res.genres; });
        this.options = {};
        this.getDiscover();
        this.titleService.setTitle('Filmes populares');
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent.prototype.getDiscover = function () {
        var _this = this;
        this.DBService.getDiscover('movie', this.options).subscribe(function (res) {
            var placeholderImg = 'http://via.placeholder.com/500x281?text=Fastshop';
            var imgUrl = "http://image.tmdb.org/t/p/w500";
            _this.itemList = res.results.map(function (item) {
                item.poster_path = item.poster_path ? imgUrl + "/" + item.poster_path : placeholderImg;
                item.backdrop_path = item.backdrop_path ? imgUrl + "/" + item.backdrop_path : placeholderImg;
                item.title = item.title.length <= 18 ? item.title : item.title = item.title.substr(0, 18) + '...';
                item.overview = item.overview.substr(0, 100) + '...';
                return item;
            });
        });
    };
    MoviesComponent.prototype.like = function (e, movie) {
        e.stopPropagation();
        alert(movie.title);
    };
    MoviesComponent.prototype.goToMovieDetails = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies',
            template: __webpack_require__("../../../../../src/app/movies/movies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_5__services_movie_db_service__["a" /* MovieDBService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/movie-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDBService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieDBService = /** @class */ (function () {
    function MovieDBService(http) {
        this.http = http;
        this.API_BASE = 'https://api.themoviedb.org/3/';
        this.API_KEY = 'b419980cd004e0da8ed2d7f65410e07c';
    }
    MovieDBService.prototype.formatParams = function (options) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('api_key', this.API_KEY)
            .set('language', 'pt-BR');
        if (options) {
            Object.keys(options).forEach(function (key) {
                params = params.append(key, options[key]);
            });
        }
        return { params: params };
    };
    MovieDBService.prototype.getYears = function () {
        var year = new Date().getFullYear();
        var yearList = [];
        for (var i = 0; i < 25; i++) {
            yearList.push(year - i);
        }
        return yearList;
    };
    MovieDBService.prototype.getMovies = function (type) {
        type = type || 'popular';
        return this.http.get(this.API_BASE + "movie/" + type, this.formatParams({}))
            .map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    MovieDBService.prototype.getMovieDetails = function (movieId) {
        var movieDetilasUrl = this.API_BASE + "movie/" + movieId;
        return this.http.get(movieDetilasUrl, this.formatParams({}))
            .map(function (res) {
            return res;
        }).catch(this.handleError);
    };
    MovieDBService.prototype.getGenres = function () {
        var generesUrl = this.API_BASE + "genre/movie/list";
        return this.http.get(generesUrl, this.formatParams({}))
            .map(function (response) { return response; }).catch(this.handleError);
    };
    MovieDBService.prototype.getDiscover = function (type, options) {
        options.api_key = this.API_KEY;
        var generesUrl = this.API_BASE + "discover/" + type;
        return this.http.get(generesUrl, this.formatParams(options))
            .map(function (response) { return response; }).catch(this.handleError);
    };
    MovieDBService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            this.body = error || '';
            this.err = this.body.error || JSON.stringify(this.body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + this.err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    MovieDBService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MovieDBService);
    return MovieDBService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map