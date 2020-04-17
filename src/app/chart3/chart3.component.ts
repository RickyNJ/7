import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements OnInit {

  data = 30; 
  max = 100;
  min = 5;  

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
    {data: this.data, label: 'Moisture', backgroundColor: this.colorPicker(this.data, this.max, this.min)}

  ];

  onClick(min, max){
    console.log(min.value, max.value);
    this.max = max.value;
    this.min = min.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
