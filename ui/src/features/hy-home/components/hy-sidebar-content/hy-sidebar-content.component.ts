import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'hy-sidebar-content',
  templateUrl: './hy-sidebar-content.component.html',
  styleUrls: ['./hy-sidebar-content.component.scss']
})
export class HySidebarContentComponent implements OnInit {

  categories = [];

  constructor(public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  searchByCategory(category: string): any {
    this.router.navigate([`/discussions`], {queryParams: {category}});
  }

  searchMyDiscussions(): void {
    this.router.navigate(['/discussions'], {queryParams: {myDiscussions: true}});
  }

  getAllDiscussions(): void {
    this.router.navigate(['/friends']);
  }
}
