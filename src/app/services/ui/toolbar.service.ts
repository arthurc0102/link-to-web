import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {

  private isMenuOpen$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  isMenuOpen(): Observable<boolean> {
    return this.isMenuOpen$.pipe(share());
  }

  toggle(): void {
    this.isMenuOpen$.next(!this.isMenuOpen$.getValue());
  }

  open(): void {
    this.isMenuOpen$.next(true);
  }

  close(): void {
    this.isMenuOpen$.next(false);
  }

}
