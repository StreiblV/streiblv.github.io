import {Component, OnInit} from '@angular/core';
import {ArtworksService} from "./service/artworks.service";
import {Artworks} from "./service/artworks";

@Component({
  selector: 'app-drawing',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {
  private drawings: Artworks = new Artworks();

  constructor(
    private drawingsService: ArtworksService
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
