import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'hy-loader',
  templateUrl: './hy-loader.component.html',
  styleUrls: ['./hy-loader.component.scss']
})
export class HyLoaderComponent {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  showLoading: Subject<boolean> = this.loaderService.showLoading;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
  }
}
