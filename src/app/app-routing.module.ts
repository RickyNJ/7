import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';

const routes: Routes = [
  
  /**Hier gebeurt de routing van de applicatie, iedere rout krijgt een naam en een component waar naartoe het verwijst
   */
  {path: '', component: Chart1Component},
  {path: 'chart1', component: Chart1Component},
  {path: 'chart2', component: Chart2Component},
  {path: 'chart3', component: Chart3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
