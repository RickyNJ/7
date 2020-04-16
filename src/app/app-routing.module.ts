import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';

const routes: Routes = [
  
  
  {path: 'tree', component: TreeComponent},
  {path: 'chart1', component: Chart1Component},
  {path: 'chart2', component: Chart2Component},
  {path: 'chart3', component: Chart3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
