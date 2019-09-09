import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  constructor(private apiService: ApiService) { 

  }

  ngOnInit() {
    this.apiService.getApod().subscribe(x=>console.log(x))
  }

}
