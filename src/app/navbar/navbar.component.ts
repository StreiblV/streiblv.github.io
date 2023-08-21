import { Component } from '@angular/core';
import {NAVRAIL_ID} from "../navrail/navrail.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navrailId = NAVRAIL_ID;
}
