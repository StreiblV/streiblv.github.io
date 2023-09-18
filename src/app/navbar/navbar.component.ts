import {Component, Input} from '@angular/core';
import {NAVRAIL_ID, NavrailComponent} from "../navrail/navrail.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input("navrail")
  navrail: NavrailComponent | null = null

  toggleNavrail() {
    if (this.navrail) {
      this.navrail.showing = !this.navrail.showing
    }
  }
}
