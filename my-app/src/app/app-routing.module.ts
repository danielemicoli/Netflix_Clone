import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path:'home',component:MainComponent},
  {path:'home',component:SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
