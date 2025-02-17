import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { JobSearchService } from '../job-search.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  jobs: any[] = [];  
  filteredJobs: any[] = [];
  searchTerm: string = '';  

  constructor(private apiService: APIService, private jobSearchService: JobSearchService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response: any) => {
        this.jobs = response;
        this.filteredJobs = response;
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    // Subscribe to search term updates
    this.jobSearchService.searchQuery$.subscribe(query => {
      console.log("Received Search Query:", query); // Debugging
      this.searchTerm = query;
      this.filterJobs();
    });
  }

  filterJobs(): void {
    if (!this.searchTerm.trim()) {
      this.filteredJobs = this.jobs; // Reset when search is empty
      return;
    }

    this.filteredJobs = this.jobs.filter(job =>
      job?.title?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job?.state?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job?.category?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
