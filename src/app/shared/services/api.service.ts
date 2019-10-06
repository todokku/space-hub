import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "https://api.nasa.gov";
  key = "OfxS2R2bdDhY4gRQETwm8sUlgHUF12IZuSJZmsut";

  constructor(private httpClient: HttpClient) {}

  public getNEOSW(start, end) {
    const res = this.httpClient.get(
      `${this.apiURL}/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${this.key}`
    );
    return res;
  }

  public getApod() {
    return this.httpClient.get<any>(
      `${this.apiURL}/planetary/apod?api_key=${this.key}`
    );
  }
  public getInsightWeather() {
    return this.httpClient.get<any>(
      `${this.apiURL}/insight_weather/?api_key=${this.key}&feedtype=json&ver=1.0`
    );
  }
}
