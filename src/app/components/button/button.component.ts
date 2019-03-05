import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hover-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() message: string;
  @Input() link: string;
  @Input() callBack: Function;
  @Input() goToPage = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    if (this.goToPage && this.link !== undefined) {
      this.router.navigateByUrl('/' + this.link);
    } else if (this.callBack !== undefined) {
      this.callBack(this.message);
    }
  }
}
