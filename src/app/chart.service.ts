import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  getData1(){
    return 100;
  }

  private max1 = 100;
  private min1 = 10;

  setMax1(val){
    this.max1 = val;
  }

  getMax1(){
    return this.max1;
  }
  
  

  setMin1(val){
    this.min1 = val;
  }

  getMin1(){
    return this.min1;
  }
  


  getData2(){
    return 50;
  }

  private max2;

  setMax2(val){
    this.max2 = val;
  }
  
  getMax2(){
    return this.max2;
  }

  private min2;

  setMin2(val){
    this.min2 = val;
  }
  
  getMin2(){
    return this.min2;
  }
  


  getData3(){
    return 30;
  }

  private max3;

  setMax3(val){
    this.max3 = val;
  }
  
  getMax3(){
    return this.max3;
  }

  private min3;

  setMin3(val){
    this.min3 = val;
  }
  
  getMin3(){
    return this.min3;
  }
  constructor() { }
}
