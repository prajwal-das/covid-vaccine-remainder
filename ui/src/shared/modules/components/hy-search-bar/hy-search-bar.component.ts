import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'hy-search-bar',
  templateUrl: './hy-search-bar.component.html',
  styleUrls: ['./hy-search-bar.component.scss']
})
export class HySearchBarComponent implements OnInit {

  @Input()
  resultUrl: string;

  search;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.router.navigate([this.resultUrl], {queryParams: {search: this.search}});
  }

  onSearchCancel(): void {
    this.search = null;
    this.router.navigate([this.resultUrl], {queryParams: {search: this.search}});
  }

}
