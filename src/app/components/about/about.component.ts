import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  Location = 'Christchurch';
  DateOfBirth = '1994-06-18';
  JobTitle = 'Contract Software Engineer';
  Company = 'Zeevo';

  constructor() { }

  ngOnInit() {
  }

  get age(): number {
    return moment().diff(moment('1994-06-18'), 'years');
  }
}
