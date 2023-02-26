import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowedRoutingModule } from './borrowed-routing.module';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BorrowedListComponent
  ],
    imports: [
        CommonModule,
        BorrowedRoutingModule,
        ReactiveFormsModule
    ]
})
export class BorrowedModule { }
