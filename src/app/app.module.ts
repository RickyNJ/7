import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { ChartsModule } from 'ng2-charts';
import { chartjsannotations } from 'chartjs-plugin-annotation';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { ChartService } from './chart.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    StorageServiceModule
   
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
