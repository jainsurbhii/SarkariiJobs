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
    return this.apiService.getData(); 
  }

 
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
  getTitle(): Observable<string[]> {
    return new Observable(observer => {
      observer.next(["Junior Engineer", "Surgeon", "Professor"]);
      observer.complete();
    });
  }
}
