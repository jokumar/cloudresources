import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogDetailsComponent} from './blog-details/blog-details.component';

const routes: Routes = [

{path: 'blog-details', component : BlogDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
