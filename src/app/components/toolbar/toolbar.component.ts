import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  isMenuOpen = false;

  leftMenuItems: MenuItem[] = [
    { title: 'Shorten', link: '/shorten' },
    { title: 'Bookmark', link: '/bookmark' },
  ];

  rightMenuItems: MenuItem[] = [
    { title: 'Auth', link: '/auth' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  open(): void {
    this.isMenuOpen = true;
  }

  close(): void {
    this.isMenuOpen = false;
  }

  get menuItems() {
    return this.leftMenuItems.concat(this.rightMenuItems);
  }

}
