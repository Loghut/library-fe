import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowedRoutingModule } from './borrowed-routing.module';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';


@NgModule({
  declarations: [
    BorrowedListComponent
  ],
  imports: [
    CommonModule,
    BorrowedRoutingModule
  ]
})
export class BorrowedModule { }
