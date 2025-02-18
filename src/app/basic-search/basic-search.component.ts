import { Component, OnInit } from '@angular/core';
import { JobSearchService } from '../job-search.service';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
  selectedCategory: string = '';
  selectedState: string = '';
  categories: string[] = [];
  states: string[] = [];

  constructor(private jobSearchService: JobSearchService) {}

  ngOnInit(): void {
    this.jobSearchService.getCategories().subscribe(data => this.categories = data);
    this.jobSearchService.getStates().subscribe(data => this.states = data);
  }

  onFilterChange(): void {
    this.jobSearchService.updateSearchQuery({
      searchTerm: '',
      category: this.selectedCategory,
      state: this.selectedState
    });
  }
}
