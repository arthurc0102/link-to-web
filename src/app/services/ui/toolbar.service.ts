import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {

  private isMenuOpenSubject$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggle(): void {
    this.isMenuOpenSubject$.next(!this.isMenuOpen);
  }

  open(): void {
    this.isMenuOpenSubject$.next(true);
  }

  close(): void {
    this.isMenuOpenSubject$.next(false);
  }

  get isMenuOpen(): boolean {
    return this.isMenuOpenSubject$.getValue();
  }

  get isMenuOpen$(): Observable<boolean> {
    return this.isMenuOpenSubject$.pipe(share());
  }

}
