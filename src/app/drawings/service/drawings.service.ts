import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Drawings} from "./drawings";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrawingsService {

  constructor(
    private http: HttpClient
  ) { }

  getDrawingList(): Observable<Drawings> {
    return  this.http.get<Drawings>("assets/drawings/drawings.json")
  }
}
