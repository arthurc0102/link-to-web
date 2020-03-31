import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MenuItem } from '../../models/menu-item.model';
import { ToolbarService } from '../../services/ui/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  isMenuOpen$: Observable<boolean>;

  leftMenuItems: MenuItem[] = [
    { title: 'Shorten', link: '/shorten' },
    { title: 'Bookmark', link: '/bookmark' },
  ];

  rightMenuItems: MenuItem[] = [
    { title: 'Auth', link: '/auth' },
  ];

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.isMenuOpen$ = this.toolbarService.isMenuOpen();
  }

  toggleMenu(): void {
    this.toolbarService.toggle();
  }

  closeMenu(): void {
    this.toolbarService.close();
  }

  get menuItems(): MenuItem[] {
    return this.leftMenuItems.concat(this.rightMenuItems);
  }

}
