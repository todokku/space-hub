import { ApiService } from "./../../shared/services/api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-neosw",
  templateUrl: "./neosw.component.html",
  styleUrls: ["./neosw.component.scss"]
})
export class NeoswComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService
      .getNeosw("start_date=2019-09-01&end_date=2019-09-07")
      .subscribe(x => console.log(x));
  }
}
