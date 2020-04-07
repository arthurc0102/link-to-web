import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MenuItem } from 'src/app/models/menu-item.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToolbarService } from 'src/app/services/ui/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  isMenuOpen$: Observable<boolean>;

  private menuItems: { left: MenuItem[], right: MenuItem[] } = {
    left: [
      { title: 'Shorten', link: '/shorten', needAuthenticate: null },
      { title: 'Bookmark', link: '/bookmark', needAuthenticate: true },
    ],
    right: [
      { title: 'Login', link: '/auth/login', needAuthenticate: false },
      { title: 'Logout', link: '/auth/logout', needAuthenticate: true },
    ],
  };

  constructor(
    private auth: AuthService,
    private toolbarService: ToolbarService,
  ) { }

  ngOnInit(): void {
    this.isMenuOpen$ = this.toolbarService.isMenuOpen$;
  }

  toggleMenu(): void {
    this.toolbarService.toggle();
  }

  closeMenu(): void {
    this.toolbarService.close();
  }

  getMenuItems(tag?: 'left' | 'right'): MenuItem[] {
    let items: MenuItem[];

    if (!tag) {
      items = Object.values(this.menuItems).reduce((previous, current) => previous.concat(current));
    } else {
      items = this.menuItems[tag];
    }

    return items.filter(item => item.needAuthenticate === null || item.needAuthenticate === this.auth.isAuthenticated);
  }

}
