import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CuriosityComponent } from "./curiosity.component";
import { CuriosityRoutingModule } from "./curiosity-routing.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [CuriosityComponent],
  imports: [CommonModule, CuriosityRoutingModule, MatCardModule]
})
export class CuriosityModule {}
