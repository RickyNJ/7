import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements OnInit {

  public data = this._chartService.getData3();
  
  private max = this._chartService.getMax3;
  private min = this._chartService.getMin3;   

  colorPicker(data, max, min){
    if(data>max || data<min){
      return '#ff0000';
    }
    else{
      return '#00ff11';
    }
  }

  public barChartOptions = {
    scaleShowHorizontalLines: false,
    responsive: true
  };

  public barChartLabels = ['Moisture'];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartData = [
    this.chartUpdate()  
  ];

  chartUpdate(){
    console.log(this.data, this._chartService.getMax1(), this._chartService.getMin1());
    
    return {data: this.data, label: 'Temperature', backgroundColor: this.colorPicker(this.data, this._chartService.getMax1(), this._chartService.getMin1())} 
    
  }

  onClick(min, max){
    this._chartService.setMax1(max.value);
    this._chartService.setMin1(min.value);   
    
    this.barChartData.pop();
    this.barChartData.push(this.chartUpdate());
    console.log(this.barChartData)
  }

  constructor(private _chartService: ChartService) { }

  ngOnInit(): void {
  }

}
