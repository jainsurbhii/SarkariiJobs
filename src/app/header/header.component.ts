import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeSection: string = ''; // Track the currently open section

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? '' : section;
  }
}
