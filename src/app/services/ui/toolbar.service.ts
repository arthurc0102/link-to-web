import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {

  isMenuOpen$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggle(): void {
    this.isMenuOpen$.next(!this.isMenuOpen);
  }

  open(): void {
    this.isMenuOpen$.next(true);
  }

  close(): void {
    this.isMenuOpen$.next(false);
  }

  get isMenuOpen(): boolean {
    return this.isMenuOpen$.getValue();
  }

}
