import { ApiService } from "src/app/shared/services/api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-insight-weather",
  templateUrl: "./insight-weather.component.html",
  styleUrls: ["./insight-weather.component.scss"]
})
export class InsightWeatherComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService
      .getInsightWeather()
      .subscribe(x => console.log(x));
  }
}
