import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs'
import { ChartService } from '../chart.service';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

export class Chart1Component implements OnInit {
  /** Data die uit de database gehaald zou moeten worden */
  public data = this._chartService.getData1();
  
  private max = this._chartService.getMax1;
  private min = this._chartService.getMin1;  

  
  
  /**Functie die kijkt of de data binnen de limiet ligt en de passende kleur terug stuurd */
  colorPicker(data, max, min){
    if(data>max || data<min){
      return '#ff0000';
    }
    else{
      return '#00ff11';
    }
  }

  /**Chart opties */
  public barChartOptions = {
    scaleShowHorizontalLines: false,
    responsive: true,
    /**hier zou de annotation plugin zijn werk moeten doen */
    annotations: [{
      type: 'line',
      value: this.min
    }]
  };
  
  public barChartLabels = ['Teperature'];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;
  
  /**De daadwerkelijke bar met bijbehorende data wordt hier aangemaakt */
  public barChartData = [
    this.chartUpdate()
    
    /**{data: this.data, label: 'Temperature', backgroundColor: this.colorPicker(this.data, this.max, this.min)}*/
  ];

  chartUpdate(){
    console.log(this.data, this._chartService.getMax1(), this._chartService.getMin1());
    
    return {data: this.data, label: 'Temperature', backgroundColor: this.colorPicker(this.data, this._chartService.getMax1(), this._chartService.getMin1())} 
    
  }

  /**De buttonfunctie, hier wordt de min en max overschreven, dit kan vervangen worden door een functie die de gegevens binnen de DB vervangt */
  onClick(min, max){
    
    this._chartService.setMax1(max.value);
    this._chartService.setMin1(min.value);   
    
    this.barChartData.pop();
    this.barChartData.push(this.chartUpdate());
    console.log(this.barChartData)
    
    
    /**TO DO: het updaten van de chart */
  }
  
  

  constructor(private _chartService: ChartService) { }

  ngOnInit() {
    
  }

}

