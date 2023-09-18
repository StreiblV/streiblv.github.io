import {Component, HostListener} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

export const NAVRAIL_ID = "navrail";

@Component({
  selector: 'app-navrail',
  templateUrl: './navrail.component.html',
  styleUrls: ['./navrail.component.scss'],
  animations: [
    trigger("flyIn", [
      transition(':enter', [
        style({
          opacity: 0.0,
          transform: 'translateX(-100%)'
        }),
        animate('200ms',
          style({
            opacity: 1.0,
            transform: 'translateX(0%)'
          })),
      ]),
      transition(':leave', [
        animate('200ms',
          style({
            opacity: 0.0,
            transform: 'translateX(-100%)'
          }))
      ])
    ])
  ]
})
export class NavrailComponent {
  showing = true
}
