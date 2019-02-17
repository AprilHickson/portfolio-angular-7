import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'hobbies', component: HobbiesComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HobbiesComponent,
    ButtonComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
