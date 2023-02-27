import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BooksListComponent} from "./books-list/books-list.component";
import {ZanreListComponent} from "../zanre/zanre-list/zanre-list.component";

const routes: Routes = [
  {path: 'books-list', component: BooksListComponent},
  {path: '../zanre/zanre-list', component: ZanreListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
