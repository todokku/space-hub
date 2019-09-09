import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "apod",
        loadChildren: () =>
          import("./modules/apod/apod.module").then(m => m.ApodModule)
      },
      {
        path: "neosw",
        loadChildren: () =>
          import("./modules/neosw/neosw.module").then(m => m.NeoswModule)
      },
      {
        path: "insight-weather",
        loadChildren: () =>
          import("./modules/insight-weather/insight-weather.module").then(
            m => m.InsightWeatherModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
