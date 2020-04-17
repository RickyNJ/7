import { Component, OnInit } from '@angular/core';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})

export class Chart1Component implements OnInit {
  /** Data die uit de database gehaald zou moeten worden */
  data = 110; 
  max = 100;
  min = 5;  
 
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
    {data: this.data, label: 'Temperature', backgroundColor: this.colorPicker(this.data, this.max, this.min)}
  ];

  /**De buttonfunctie, hier wordt de min en max overschreven, dit kan vervangen worden door een functie die de gegevens binnen de DB vervangt */
  onClick(min, max){
    console.log(min.value, max.value);
    this.max = max.value;
    this.min = min.value;    
    /**TO DO: het updaten van de chart */
  }
  
  constructor() { }

  ngOnInit() {

  }

}
