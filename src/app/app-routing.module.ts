import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserPageComponent} from "./user/user-page/user-page.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import {BookPageComponent} from "./books/book-page/book-page.component";
import {BookFormComponent} from "./books/book-form/book-form.component";
import {BookListComponent} from "./books/book-list/book-list.component";
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {BorrowingFormComponent} from "./borrowing/borrowing-form/borrowing-form.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";

const routes: Routes = [
  {path: "user-page", component: UserPageComponent,},
  {path: "user-form", component: UserFormComponent},
  {path: "user-list", component: UserListComponent},

  {path: "book-page", component: BookPageComponent},
  {path: "book-form", component: BookFormComponent},
  {path: "book-list", component: BookListComponent},

  {path: "borrowing-page", component: BorrowingPageComponent},
  {path: "borrowing-form", component: BorrowingFormComponent},
  {path: "borrowing-list", component: BorrowingListComponent},
]
@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule {

}
