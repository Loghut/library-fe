import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {UsersModule} from "./users/users.module";
import {BooksModule} from "./books/books.module";
import {BorrowedModule} from "./borrowed/borrowed.module";
import {ZanreRoutingModule} from "./zanre/zanre-routing.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        UsersModule,
        BooksModule,
        BorrowedModule,
        ZanreRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
