import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InsightWeatherRoutingModule } from "./insight-weather-routing.module";
import { InsightWeatherComponent } from "./insight-weather.component";

@NgModule({
  declarations: [InsightWeatherComponent],
  imports: [CommonModule, InsightWeatherRoutingModule]
})
export class InsightWeatherModule {}
