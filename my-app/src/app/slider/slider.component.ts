import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movies } from '../interfaces/movies';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() sliderConfig:any;
  @Input() movies:any;
  @Input() title:any;
  infomovie:any;
  // trending:any;

  constructor(private movie:MovieService,
    private router:Router) { }

  ngOnInit(): void {
    // this.movie.getPopularMovie().subscribe( resp => console.log(resp))
    // this.movie.getTrending().subscribe(data => this.trending =data);

  }
  infoMovie(item:any){
    this.movie.getMovieInfo(item.id)
    .subscribe(resp => this.infomovie = resp)
      this.router.navigate(['home', item.id,'info'])
  }
}
