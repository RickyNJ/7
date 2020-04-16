import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements OnInit {

  public barChartOptions = {
    scaleShowHorizontalLines: false,
    responsive: true
  };

  public barChartLabels = ['Moisture'];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartData = [
    {data: [30], label: 'Moisture'}

  ];

  log(min, max){
    console.log(min.value, max.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
