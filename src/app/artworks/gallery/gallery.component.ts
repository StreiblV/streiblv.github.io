import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {v4} from 'uuid';

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

  galleryId = `a${v4()}`
  galleryIdReference = `#${this.galleryId}`
  currentIndex = 0;

  @ViewChild('gallery')
  set gallery(value: ElementRef) {
    this._gallery = value

    if (value != null && value.nativeElement != null) {
      const carousel = new bootstrap.Carousel(value.nativeElement)
      carousel.cycle()
      value.nativeElement.addEventListener("slid.bs.carousel", (event: any) => {
        this.currentIndex = event.to
      })
    }
  }

  get images(): string[] {
    return this._images;
  }

  @Input()
  set images(value: string[]) {
    this._images = value;
  }

  getImagePath(image: string) {
    return 'assets/' + this.subfolder + '/' + image
  }
}
