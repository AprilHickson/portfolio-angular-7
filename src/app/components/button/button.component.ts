import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hover-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
