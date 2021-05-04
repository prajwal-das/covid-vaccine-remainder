import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hy-avatar',
  templateUrl: './hy-avatar.component.html',
  styleUrls: ['./hy-avatar.component.scss']
})
export class HyAvatarComponent implements OnInit {

  @Input()
  src;

  @Input()
  alt = 'person';

  @Input()
  color = 'primary';

  @Input()
  marginTop = '0em';

  @Input()
  radius = '2.5em';

  constructor() {
  }

  ngOnInit(): void {
  }

}
