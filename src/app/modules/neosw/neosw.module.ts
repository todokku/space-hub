import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NeoswRoutingModule } from "./neosw-routing.module";
import { NeoswComponent } from "./neosw.component";

@NgModule({
  declarations: [NeoswComponent],
  imports: [CommonModule, NeoswRoutingModule]
})
export class NeoswModule {}
