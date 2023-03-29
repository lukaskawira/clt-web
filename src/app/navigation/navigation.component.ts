import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {AppService} from "../app.service";
import {NavigationItem} from "../models/models";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  //#region @Input & @Output
  //#endregion

  //#region @NavigationItems
  navigationItems: NavigationItem[] = [
    {
      id: 1,
      name: 'Home',
      link: '/home',
      subItems: []
    }, {
      id: 2,
      name: 'About Us',
      link: '/about-us',
      subItems: []
    }, {
      id: 3,
      name: 'Products',
      link: '',
      subItems: [
        {
          id: 31,
          name: 'Process',
          link: '/products/process',
          subItems: []
        }, {
          id: 32,
          name: 'Our Leathers',
          link: '/products/our-leathers',
          subItems: []
        }, {
          id: 33,
          name: 'Embosses',
          link: '/products/emboss',
          subItems: []
        }
      ]
    }, {
      id: 4,
      name: 'Contact Us',
      link: '/contact-us',
      subItems: []
    }
  ]
  //#endregion

  //#region @Properties
  renderMobileView: boolean = false;
  mobileBreakpoint: number;
  activeHamburger = false;
  mobileNavCollapse = true;
  active = 0;

  //#endregion

  constructor(private breakpointObserver: BreakpointObserver, private appService: AppService) {
    this.mobileBreakpoint = this.appService.mobileBreakpoint;
    this.breakpointObserver.observe([`(min-width: ${this.mobileBreakpoint}px)`]).subscribe((result) => {
      this.renderMobileView = !result.matches;
    });
    this.appService.hamburgerVisibilityChange.subscribe((value) => {
      this.activeHamburger = value;
    });
  }

  ngOnInit(): void {
  }


  //#region @EventHandler
  setActive(num: number): void {
    window.scrollTo(0, 0);
    this.active = num;
    if (this.renderMobileView) {
      this.toggleSidebar();
    }
  }

  toggleSidebar(): void {
    // Set the hamburger active state on service
    this.appService.toggleHamburgerVisibility();
    this.activeHamburger = this.appService.isHamburgerActive;
  }

  //#endregion
}
