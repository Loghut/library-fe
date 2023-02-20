import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UserPageComponent } from './user/user-page/user-page.component';
import { BookPageComponent } from './book-page/book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    BookPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
