import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {
  constructor(
    private http: HttpClient
  ) { }

  getPhotography(): Observable<string[]> {
    return  this.http.get<string[]>("assets/photography/photography.json")
  }
}
