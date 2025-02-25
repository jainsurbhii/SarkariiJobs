import { JobSearchService } from '../job-search.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
@Input() isVisible: boolean = false;
searchTerm: string = '';
category: string = '';
state: string = '';

constructor(private jobSearchService: JobSearchService) {}

onSearch(): void {
  this.jobSearchService.updateSearchQuery({
    searchTerm: this.searchTerm,
    category: this.category,
    state: this.state
  });
}
}
