import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "spacehub";

  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path], {
      queryParamsHandling: "merge"
    });
  }
}
