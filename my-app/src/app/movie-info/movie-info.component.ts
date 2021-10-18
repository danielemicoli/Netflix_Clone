import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieInfo:any;
  headerBGUrl: any;
  movieTrailer:any;
  movieCredit:any;
  videoUrl = 'https://www.youtube.com/embed/your-videoId'

  constructor(private movie:MovieService,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.movie.getMovieInfo(params.id)
      .subscribe(params => this.movieInfo = params))
      this.route.params.subscribe(params => 
        this.movie.getCredits(params.id)
          .subscribe(params => this.movieCredit = params));
      
      }
    }

