import { Component, OnInit } from '@angular/core';
import { HobbiesDialogComponent } from './dialog/HobbiesDialog';
import { MatDialog } from '@angular/material';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { HobbiesDialogData } from './dialog/HobbiesDialogData';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.less']
})
export class HobbiesComponent implements OnInit {

  hobbies: HobbiesDialogData[];

  constructor(public dialog: MatDialog, private http: Http) { }

  ngOnInit() {
    this.getHobbiesJson().subscribe((data: HobbiesDialogData[]) => {
      this.hobbies = data;
    });
  }

  clicked(hobby: string) {
    const hobbyItem = this.hobbies.filter((item: HobbiesDialogData) => item.title === hobby)[0];

    if (hobbyItem !== null && hobbyItem !== undefined) {
      this.dialog.open(HobbiesDialogComponent, {
        data: hobbyItem
      });
    }
  }
  getHobbiesJson() {
    // get users from api
    return this.http.get('/assets/json/hobbies.json')
      .map((res: any) => res.json())
      .catch((error: any, caught: Observable<any>) => {
        console.log(error);
        return caught;
      });
  }
}
