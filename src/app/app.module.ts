import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Highcharts from 'highcharts/highstock';
import { HighchartsChartModule } from 'highcharts-angular';
import HC_more from "highcharts/highcharts-more";
import HC_stock from 'highcharts/modules/stock';
import HC_exporting from 'highcharts/modules/exporting';
import Annotations from "highcharts/modules/annotations";

HC_more(Highcharts);
HC_stock(Highcharts);
HC_exporting(Highcharts);
Annotations(Highcharts);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
