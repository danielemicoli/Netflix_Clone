import { AfterViewInit, HostListener, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];
  
  trending:any;
  popular:any;
  topRated:any;
  originals:any;
  nowPlaying:any;
  movies:any;
  sliderConfig = {
    slidesToShow: 7,
    slidesToScroll:2,
    arrows: true,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
        slidesToShow: 6
        }
        },
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 5
        }
        },
      {
        breakpoint: 1000,
        settings: {
        slidesToShow: 4
        }
        },
      {
        breakpoint: 800,
        settings: {
        slidesToShow: 3
        }
        },
      {
      breakpoint: 630,
      settings: {
      slidesToShow: 2
      }
      },
      {
      breakpoint: 400,
      settings: {
      slidesToShow: 1
      }
      }
      ]
  }
  @ViewChild('slickModal') header: ElementRef | undefined;

  headerBGUrl: any;
  movieVideo:any;
  popularMovie:any;
  
  constructor(private movie:MovieService) { }

  ngOnInit(): void {
    // this.subs.push(this.movie.getTrending().subscribe(data => this.trending =data));
    // this.headerBGUrl = 'https://image.tmdb.org/t/p/original'+this.trending.results.backdrop_path;
    // this.subs.push(this.movie.getPopularMovie().subscribe(data => this.popular =data));
    // this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated =data));
    // this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying =data));
    // this.subs.push(this.movie.getOriginals().subscribe(data => this.originals =data))


    // this.movie.getPopularMovie().subscribe( resp => this.popularMovie = resp)
    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[0].backdrop_path;
    }));
    this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));
  }
  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe())
  }

    getVideoTr(item:number){
    this.movieVideo.getPosterVideo(item).subscribe((resp:any) =>{
      this.movieVideo = resp;
  }

)
}}
