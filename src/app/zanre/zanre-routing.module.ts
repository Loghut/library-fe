import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ZanreListComponent} from "./zanre-list/zanre-list.component";

const routes: Routes = [
  {path: "zanre-list",
    component:ZanreListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZanreRoutingModule { }
