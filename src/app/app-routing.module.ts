import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HobbiesDialogComponent } from './components/hobbies/dialog/HobbiesDialog';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HobbiesComponent,
    ButtonComponent,
    AboutComponent,
    HobbiesDialogComponent
  ],
  imports: [RouterModule.forRoot(routes), MatDialogModule, BrowserAnimationsModule, HttpModule],
  exports: [RouterModule, ButtonComponent],
  entryComponents: [
    HobbiesDialogComponent
  ]
})
export class AppRoutingModule { }
