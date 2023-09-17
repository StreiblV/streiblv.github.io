import {Component, OnInit} from '@angular/core';
import {PhotographyService} from "./service/photography.service";

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit{
  private _images: string[] = [];

  constructor(
    private photographyService: PhotographyService
  ) {}

  ngOnInit(): void {
    this.photographyService.getPhotography()
      .subscribe(value => this._images = value);
  }

  get images(): string[] {
    return this._images;
  }
}
