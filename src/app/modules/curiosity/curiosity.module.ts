import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuriosityComponent } from './curiosity.component';
import { CuriosityRoutingModule } from './curiosity-routing.module';



@NgModule({
  declarations: [CuriosityComponent],
  imports: [
    CommonModule,
    CuriosityRoutingModule
  ]
})
export class CuriosityModule { }
