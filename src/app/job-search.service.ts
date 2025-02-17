import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {
  private searchQuery = new BehaviorSubject<string>(''); // Holds search term
  searchQuery$ = this.searchQuery.asObservable(); // Observable for JobSearchComponent

  updateSearchQuery(query: string): void {
    console.log("Updating Search Query:", query); // Debugging
    this.searchQuery.next(query); // Update the search term
  }
}
