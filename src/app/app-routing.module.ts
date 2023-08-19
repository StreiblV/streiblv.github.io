import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {DrawingsComponent} from "./drawings/drawings.component";
import {AnimationsComponent} from "./animations/animations.component";
import {PhotographyComponent} from "./photography/photography.component";

const routes: Routes = [
  {
    path: "about-me",
    component: AboutMeComponent
  },
  {
    path: "drawings",
    component: DrawingsComponent
  },
  {
    path: "animations",
    component: AnimationsComponent
  },
  {
    path: "photography",
    component: PhotographyComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/about-me"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
