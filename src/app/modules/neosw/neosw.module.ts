import { NgModule } from "@angular/core";


import { ReactiveFormsModule } from "@angular/forms";

import {
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule
} from "@angular/material";

import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";

import { HttpClientModule } from '@angular/common/http';
import { NeoswRoutingModule } from './neosw-routing.module';
import { NeoswComponent } from './neosw.component';

@NgModule({
  declarations: [NeoswComponent],
  imports: [
    NeoswRoutingModule,
    ReactiveFormsModule,

    MatButtonModule,
    NgxDaterangepickerMd.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [MatDatepickerModule]
})
export class NeoswModule {}
