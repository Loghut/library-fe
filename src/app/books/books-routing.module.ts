import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BooksListComponent} from "./books-list/books-list.component";

const routes: Routes = [
  {path: 'books-list', component: BooksListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
