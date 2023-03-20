import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {UserService} from "./common/service/user.service";
import { BookPageComponent } from './book/book-page/book-page.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import {HttpClientModule} from '@angular/common/http';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookFormComponent} from "./book/book-form/book-form.component";
import {GenrePageComponent} from "./genre/genre-page/genre-page.component";
import {GenreFormComponent} from "./genre/genre-form/genre-form.component";
import {GenreListComponent} from "./genre/genre-list/genre-list.component";
import {BookService} from "./common/service/book.service";
import {GenreService} from "./common/service/genre.service";
import {BorrowingService} from "./common/service/borrowing.service";
import {BorrowingFormComponent} from "./borrowing/borrowing-form/borrowing-form.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";
import {AngularToastifyModule, ToastService} from "angular-toastify";
import {Toast} from "angular-toastify/lib/toast";
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserFormComponent,
    UserListComponent,
    BookPageComponent,
    BookListComponent,
    BookFormComponent,
    GenreListComponent,
    GenreFormComponent,
    GenrePageComponent,
    BorrowingPageComponent,
    BorrowingListComponent,
    BorrowingFormComponent,
    UserDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularToastifyModule,
    NgbModule
  ],
  providers: [
    UserService,
    BookService,
    GenreService,
    BorrowingService,
    ToastService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
