import {Component, ElementRef, Input, ViewChild} from '@angular/core';

declare var bootstrap: any

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  private _images: string[] =[]
  private _gallery: ElementRef | null = null

  @Input("subfolder")
  subfolder: string = ""

  previousIndex = -1
  currentIndex = -1
  nextIndex = -1

  @ViewChild('gallery')
  set gallery(value: ElementRef) {
    this._gallery = value

    if (value != null && value.nativeElement != null) {
      const carousel = new bootstrap.Carousel(value.nativeElement)
      carousel.cycle()
    }
  }

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

  getImagePath(image: string) {
    return 'assets/' + this.subfolder + '/' + image
  }
}
