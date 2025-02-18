import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {
  private searchQuery = new BehaviorSubject<{ searchTerm: string; category: string; state: string }>({
    searchTerm: '',
    category: '',
    state: ''
  });
  searchQuery$ = this.searchQuery.asObservable();

  constructor(private apiService: APIService) {}

  updateSearchQuery(query: { searchTerm: string; category: string; state: string }): void {
    this.searchQuery.next(query);
  }

  getJobs(): Observable<any> {
    return this.apiService.getData(); // ✅ Fetch jobs from API
  }

  // ✅ Add methods to fetch categories and states
  getCategories(): Observable<string[]> {
    return new Observable(observer => {
      observer.next(["Engineering", "Medical", "Teaching", "Defence"]);
      observer.complete();
    });
  }

  getStates(): Observable<string[]> {
    return new Observable(observer => {
      observer.next(["Delhi", "Maharashtra", "Tamil Nadu", "Karnataka"]);
      observer.complete();
    });
  }
}
