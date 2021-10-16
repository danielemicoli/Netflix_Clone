import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path:'home',component:MainComponent},
  {path:'home',component:SliderComponent},
  {path:'home/:id/info', component:MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
