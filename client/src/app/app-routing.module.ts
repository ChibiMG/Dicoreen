import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SearchWordComponent } from './search-word/search-word.component';
import { DisplayWordComponent } from './display-word/display-word.component';


const routes: Routes = [
  { path: 'display-word/:id', component: DisplayWordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
