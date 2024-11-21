import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isActive: boolean = false;
  public isScrolled: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
