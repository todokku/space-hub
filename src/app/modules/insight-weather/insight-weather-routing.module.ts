import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InsightWeatherComponent } from "./insight-weather.component";

const routes: Routes = [
  {
    path: "",
    component: InsightWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightWeatherRoutingModule {}
