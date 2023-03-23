import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  mobileBreakpoint = 1024;

  //#region @HamburgerService
  isHamburgerActive = false;
  hamburgerVisibilityChange: Subject<boolean> = new Subject<boolean>();

  //#endregion

  constructor() {
    this.hamburgerVisibilityChange.subscribe((value) => {
      this.isHamburgerActive = value;
    });
  }

  //#region @Hamburger Methods
  toggleHamburgerVisibility(): void {
    this.hamburgerVisibilityChange.next(!this.isHamburgerActive);
  }
  //#endregion
}
