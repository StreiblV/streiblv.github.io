import { Component } from '@angular/core';
import {NAVRAIL_ID} from "./navrail/navrail.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'streiblv.github.io';
  navrailId = NAVRAIL_ID;
}
