import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  private _images: string[] =[]

  previousIndex = -1
  currentIndex = -1
  nextIndex = -1

  get images(): string[] {
    return this._images;
  }

  @Input()
  set images(value: string[]) {
    this._images = value;

    if (this.images.length > 0) {
      this.currentIndex = 0
      this.previousIndex = this.images.length - 1
    }

    if(this.images.length > 1) {
      this.nextIndex = 1
    }
  }

  next() {
    this.previousIndex = this.currentIndex;
    this.currentIndex = this.nextIndex;
    this.nextIndex = this.nextIndex + 1;

    if (this.nextIndex >= this.images.length) {
      this.nextIndex = 0;
    }
  }

  previous() {
    this.nextIndex = this.currentIndex;
    this.currentIndex = this.previousIndex;
    this.previousIndex = this.previousIndex - 1;

    if (this.previousIndex < 0) {
      this.previousIndex = this.images.length - 1;
    }
  }
}
