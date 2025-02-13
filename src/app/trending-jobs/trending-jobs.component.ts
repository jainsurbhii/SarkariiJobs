import { Component, OnInit } from '@angular/core';
import {APIService} from 'src/app/api.service'

@Component({
  selector: 'app-trending-jobs',
  templateUrl: './trending-jobs.component.html',
  styleUrls: ['./trending-jobs.component.css']
})
export class TrendingJobsComponent implements OnInit {
  data: any;

  constructor(private apiService: APIService) { }

  ngOnInit() {
   
  }

  jobs = [
    { title: 'Junior Engineer', description: 'Apply for Junior Engineer position in the Railways.', postedDate: '2025-01-25' },
    { title: 'Bank Clerk', description: 'Openings in nationalized banks for Clerk posts.', postedDate: '2025-01-26' },
    { title: 'SSC CGL', description: 'Staff Selection Commission Combined Graduate Level Exam.', postedDate: '2025-01-27' }
  ];
}
