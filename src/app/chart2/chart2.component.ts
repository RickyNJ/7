import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  public barChartOptions = {
    scaleShowHorizontalLines: false,
    responsive: true
  };

  public barChartLabels = ['Light Level'];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartData = [
    {data: [10], label: 'Light Level'}
  ];

  log(min, max){
    console.log(min.value, max.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
