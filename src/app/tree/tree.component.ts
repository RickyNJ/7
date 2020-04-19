import { Component, OnInit } from '@angular/core';
import {Chart1Component} from '../chart1/chart1.component';
import { ChartService } from '../chart.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  template: '{{message}}'
})
export class TreeComponent implements OnInit {
  
  public chart;


  constructor(private _chartService: ChartService) {
    
   }

  ngOnInit(): void {
    
  }

}
