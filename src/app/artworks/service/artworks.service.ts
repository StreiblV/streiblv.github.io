import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Artworks} from "./artworks";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {

  constructor(
    private http: HttpClient
  ) { }

  getDrawingList(): Observable<Artworks> {
    return  this.http.get<Artworks>("assets/artworks/artworks.json")
  }
}
