import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZanreRoutingModule } from './zanre-routing.module';
import { ZanreListComponent } from './zanre-list/zanre-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ZanreListComponent
  ],
    imports: [
        CommonModule,
        ZanreRoutingModule,
        ReactiveFormsModule
    ]
})
export class ZanreModule { }
