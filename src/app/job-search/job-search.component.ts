import { Component, OnInit } from '@angular/core';
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
  selectedCategory: string = '';
  selectedState: string = '';

  constructor(private jobSearchService: JobSearchService) {}

  ngOnInit(): void {
    this.jobSearchService.getJobs().subscribe((data: any[]) => {
      this.jobs = data;
      this.filteredJobs = data;
    });

    this.jobSearchService.searchQuery$.subscribe(query => {
      this.searchTerm = query.searchTerm;
      this.selectedCategory = query.category;
      this.selectedState = query.state;
      this.filterJobs();
    });
  }

  filterJobs(): void {
    this.filteredJobs = this.jobs.filter(job =>
      (this.searchTerm ? job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
      (this.selectedCategory ? job.category === this.selectedCategory : true) &&
      (this.selectedState ? job.state === this.selectedState : true)
    );
  }
}
