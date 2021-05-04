import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'hy-back-button',
  templateUrl: './hy-back-button.component.html',
  styleUrls: ['./hy-back-button.component.scss']
})
export class HyBackButtonComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  goBack(event: Event): any {
    this.location.back();
  }
}
