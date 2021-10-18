import { AfterViewInit, HostListener, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];
  infomovie:any;
  trending:any;
  latest:any;
  popular:any;
  topRated:any;
  originals:any;
  upcoming:any;
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
        slidesToShow: 5
        }
        },
      {
        breakpoint: 1200,
        settings: {
        slidesToShow: 4
        }
        },
      {
        breakpoint: 1000,
        settings: {
        slidesToShow: 3
        }
        },
      {
        breakpoint: 800,
        settings: {
        slidesToShow: 2
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
      },
      {
        breakpoint: 200,
        settings: {
        slidesToShow: 1
        }
        }
      ]
  }
  @ViewChild('stickHeader')
  header!: ElementRef;
  headerBGUrl: any;
  movieVideo:any;
  popularMovie:any;
  
  constructor(private movie:MovieService,
    private router:Router) { }

  ngOnInit(): void {
    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[1].backdrop_path;
    }));
    this.subs.push(this.movie.getPopular().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));
    this.subs.push(this.movie.getLatest().subscribe(data => this.latest = data));

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe())
  }
  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  //   getVideoTr(item:number){
  //   this.movieVideo.getPosterVideo(item).subscribe((resp:any) =>{
  //     this.movieVideo = resp;
  // }

  infoMovie(item:any){
    this.movie.getMovieInfo(item.id).subscribe(resp => this.infomovie
      = resp)
      this.router.navigate(['home', item.id,'info'])
  }
}
