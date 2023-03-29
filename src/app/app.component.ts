import {Component, HostListener, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //#region @Properties
  activeHamburger: boolean = false;
  over500Scroll: boolean = false;

  //#endregion

  constructor(private appService: AppService) {
    this.appService.hamburgerVisibilityChange.subscribe((value) => {
      this.activeHamburger = value;
    });
  }

  //#region @LifecycleHooks
  ngOnInit() {
  }

  //#endregion

  //#region @EventHandler
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.over500Scroll = window.scrollY > 535;
  }

  toggleHamburger(): void {
    this.appService.toggleHamburgerVisibility();
  }

  //#endregion
}
