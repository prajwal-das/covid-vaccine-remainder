import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hy-at-username',
  templateUrl: './hy-at-username.component.html',
  styleUrls: ['./hy-at-username.component.scss']
})
export class HyAtUsernameComponent implements OnInit {

  @Input()
  user: any;

  username = 'Unknown';

  @Input()
  showAt = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.user && this.user.name) {
      this.username = this.user.name;
    }
  }

}
