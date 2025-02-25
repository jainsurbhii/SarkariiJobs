import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';



const routes: Routes = [
  
  { path: 'search', component: SearchComponent},
  { path: 'basic-search', component: BasicSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
