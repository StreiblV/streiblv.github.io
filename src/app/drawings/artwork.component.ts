import {Component, OnInit} from '@angular/core';
import {DrawingsService} from "./service/drawings.service";
import {flatMap, map, mergeMap, Observable, of} from "rxjs";
import {Drawings} from "./service/drawings";

@Component({
  selector: 'app-drawing',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  private drawings: Drawings = new Drawings();

  constructor(
    private drawingsService: DrawingsService
  ) {}

  digital(): string[] {
    return this.drawings.digital;
  }

  traditional(): string[] {
    return this.drawings.traditional;
  }

  ngOnInit(): void {
    this.drawingsService.getDrawingList().subscribe(result => this.drawings = result);
  }
}