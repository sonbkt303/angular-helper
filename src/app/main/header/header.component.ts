import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navsTab = [
    { path: '/', active: true, value: 'HOME' },
    { path: '/resume', value: 'RESUME' }
  ];

  constructor() {}

  ngOnInit() {
    // console.log(window.location.pathname);
    console.log(document.cookie);
  }

  changeTab(path: string) {
    this.navsTab = this.navsTab.map(tab => {
      tab.path === path ? (tab.active = true) : (tab.active = false);
      return tab;
    });
  }
}
