import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
  jobs: any[] = []; // Store API data here

  constructor(private apiservice: APIService) {}

  ngOnInit(): void {
    this.apiservice.getData().subscribe(
      (response: any) => {
        this.jobs = response; 
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }
}
