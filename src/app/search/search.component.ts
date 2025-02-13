import { Component, OnInit } from '@angular/core';
import {APIService} from 'src/app/api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: any;
jobs: any;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((response: any) => {
      this.data = response;
    });
  }

}
