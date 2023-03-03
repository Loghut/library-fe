import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { BookPageComponent } from './books/book-page/book-page.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserPageComponent,
    UserListComponent,
    BookPageComponent,
    BookListComponent,
    BookFormComponent,
    BorrowingPageComponent,
    BorrowingFormComponent,
    BorrowingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
