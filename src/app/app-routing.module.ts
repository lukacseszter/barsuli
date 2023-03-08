import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: "api", component: ApiComponent},
  {path: "about", component: AboutComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
  exports, [RouterModule]
  ]
})
export class AppRoutingModule { }
