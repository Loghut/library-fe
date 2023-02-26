import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import {ZanreRoutingModule} from "../zanre/zanre-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BooksListComponent
  ],
  exports: [
    BooksListComponent
  ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        ZanreRoutingModule,
        ReactiveFormsModule
    ]
})
export class BooksModule { }
