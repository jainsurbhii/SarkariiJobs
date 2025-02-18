import { Component } from '@angular/core';
import { JobSearchService } from '../job-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private jobSearchService: JobSearchService) {}

  onSearch(): void {
    this.jobSearchService.updateSearchQuery({
      searchTerm: this.searchTerm,
      category: '',
      state: ''
    });
  }
}
