import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HobbiesComponent,
    AboutComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
