import { Component, OnInit } from "@angular/core";;
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import * as moment from "moment";
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: "app-neosw",
  templateUrl: "./neosw.component.html",
  styleUrls: ["./neosw.component.scss"]
})
export class NeoswComponent implements OnInit {
  form: FormGroup;
  neosw:any;

  constructor(private service: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      selected: { startDate: "", endDate: "" }
    });
  }

  async searchAsteroids(startDate, endDate) {
    const res: Observable<any> = await this.service.getNEOSW(
      moment(startDate).format('YYYY-MM-DD'),
      moment(endDate).format('YYYY-MM-DD')
    );
    res.subscribe((data) => {
      console.log(data);
    });
  }

}


