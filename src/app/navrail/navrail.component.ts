import { Component } from '@angular/core';

export const NAVRAIL_ID = "navrail";

@Component({
  selector: 'app-navrail',
  templateUrl: './navrail.component.html',
  styleUrls: ['./navrail.component.scss']
})
export class NavrailComponent {
  id = NAVRAIL_ID;
}
