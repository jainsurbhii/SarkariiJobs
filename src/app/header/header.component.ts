import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  
  

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    
  }
  goToSearch() {
    this.router.navigate(['/search']);  // ✅ Navigate to SearchComponent
  }

}
