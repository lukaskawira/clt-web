import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private modalService: NgbModal) {
  }

  //#region @LifecycleHooks
  ngOnInit() {
  }

  //#endregion

  //#region @EventHandler
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  //#endregion
}
