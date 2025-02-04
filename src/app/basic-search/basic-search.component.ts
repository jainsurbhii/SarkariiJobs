import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
  states = ['Maharashtra', 'Delhi', 'Karnataka', 'Uttar Pradesh', 'Tamil Nadu'];
  categories = ['Engineering', 'Banking', 'Defense', 'Teaching', 'Medical'];
  title=['Junior Engineer', 'Bank Clerk', 'Army Officer', 'Teacher', 'Doctor'];

  
  constructor() { }

  ngOnInit(): void {
  }
  selectedState = '';
  selectedCategory = '';
  selectedTitle='';
  jobs: any[] = [];

  allJobs = [
    { title: 'Junior Engineer', state: 'Maharashtra', category: 'Engineering' },
    { title: 'Bank Clerk', state: 'Delhi', category: 'Banking' },
    { title: 'Army Officer', state: 'Karnataka', category: 'Defense' },
    { title: 'Teacher', state: 'Uttar Pradesh', category: 'Teaching' },
    { title: 'Doctor', state: 'Tamil Nadu', category: 'Medical' },
    { title: 'Railway Engineer', state: 'Delhi', category: 'Engineering' },
    { title: 'Bank PO', state: 'Maharashtra', category: 'Banking' },
    { title: 'Police Officer', state: 'Uttar Pradesh', category: 'Defense' },
    { title: 'Professor', state: 'Karnataka', category: 'Teaching' },
    { title: 'Surgeon', state: 'Tamil Nadu', category: 'Medical' }
  ];
  searchJobs() {
    this.jobs = this.allJobs.filter(job => 
      (this.selectedState ? job.state === this.selectedState : true) &&
      (this.selectedCategory ? job.category === this.selectedCategory : true) &&
      (this.selectedTitle ? job.title === this.selectedTitle : true) 

    ).slice(0, 10);
  }
}
