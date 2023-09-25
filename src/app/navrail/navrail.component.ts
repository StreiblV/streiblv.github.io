import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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
export class NavrailComponent implements OnInit {
  showing = true

  ngOnInit(): void {
    this.showing = window.innerWidth > 500;
  }
}
