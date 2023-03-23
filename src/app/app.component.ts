import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //#region @Properties
  activeHamburger: boolean = false;

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
  toggleHamburger(): void {
    this.appService.toggleHamburgerVisibility();
  }
  //#endregion
}
