import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  showLoading = new BehaviorSubject<boolean>(false);
  isLoading = new BehaviorSubject<boolean>(false);

  show(): any {
    this.isLoading.next(true);
    this.showLoading.next(true);
  }

  showOverlay(): any {
    this.isLoading.next(true);
    if (!this.showLoading.getValue()) {
      this.showLoading.next(false);
    }
  }

  hide(): any {
    this.isLoading.next(false);
    this.showLoading.next(false);
  }
}
