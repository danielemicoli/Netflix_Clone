import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../interfaces/movies';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private apiKey = environment.APIKey
api_key = 'a083bc104e7e9ad1c28cf87ccc49a165';
URL = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) { }

  // getLatestMovie(): Observable<Movies>{
  //   return this.http.get<Movies>(environment.urlAPI)
  // }

  getPosterVideo(id:number){
    // return this.http.get<any>(environment.urlAPI+'movie/'+id+'/videos?api_key='+this.APIKey)

  }
  // getPopularMovie(): Observable<Movies> {
  //   return this.http.get<any>(environment.urlAPI+'movie/popular?api_key='+this.APIKey)
  // }
  // getTrending(): Observable<any> {
  //   return this.http.get<any>(this.URL+endpoint.trending+'?api_key='+this.APIKey);
  //   };
  // getLatestMovie(): Observable<any> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.latest}api_key: ${this.APIKey}`
  //   )};

  // getOriginals(): Observable<any> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.originals}api_key: ${this.APIKey}`
  //   )};
  // getPopularMovie(): Observable<any> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.popular}api_key: ${this.APIKey}`
  //   )};
  // getTopRated(): Observable<any> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}api_key: ${this.APIKey}`
  //   )};
  //   getNowPlaying(): Observable<any> {
  //     return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}api_key: ${this.APIKey}`
  //     )};


  // getLatestMovie(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginals(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  // getPopularMovies(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTrending(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key
      }
    });
  }
  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }
  getMovieInfo(id:number){
    return this.http.get<any>(environment.urlAPI+'movie/'+id+'?api_key='+this.api_key+'&language=en-US')
  }
  }
  
  

