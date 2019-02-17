import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  messages = [
    'So you are interested in hiring April Hickson?',
    'That\'s a smart move',
    'Like a really good move on your part.',
    'This site is built in AngularJS 7',
    'Let\'s work together!'];

  constructor() { }

  ngOnInit() {
  }

}
