import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ApodRoutingModule } from "./apod-routing.module";
import { ApodComponent } from "./apod.component";

@NgModule({
  declarations: [ApodComponent],
  imports: [CommonModule, ApodRoutingModule]
})
export class ApodModule {}
