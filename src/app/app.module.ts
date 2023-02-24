import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PouzivatelComponent } from './pouzivatel/pouzivatel.component';
import {UserModel} from "./model/user.model";

@NgModule({
    declarations: [
        AppComponent,
        PouzivatelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        UserModel
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
