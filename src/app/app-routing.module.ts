import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "api", component: ApiComponent}
];


@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
  exports, [RouterModule]
  ]
})
export class AppRoutingModule { }
