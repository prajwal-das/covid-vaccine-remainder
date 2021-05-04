import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';


@Component({
  selector: 'hy-home',
  templateUrl: './hy-home.component.html',
  styleUrls: ['./hy-home.component.scss']
})
export class HyHomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
}
