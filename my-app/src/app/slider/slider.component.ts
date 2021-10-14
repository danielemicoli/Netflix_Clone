import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  trending:any;

  constructor(private movie:MovieService) { }

  ngOnInit(): void {
    // this.movie.getPopularMovie().subscribe( resp => console.log(resp))
    // this.movie.getTrending().subscribe(data => this.trending =data);

  }

}
