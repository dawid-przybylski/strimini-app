import { Injectable } from '@angular/core';
import * as transcriptData from './data';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscriptToPlotDataService {

  public data: any = transcriptData;
  
  

  // public data = JSON.parse(JSON.stringify(transcriptData));
  constructor() {
    // this.http.get('assets/ordersummary.json')//, options)
    // const configUrl = 'assets/data.json';

    // this.http.get(configUrl).subscribe((data) => {
    //   this.data = data;
    //   console.log(this.data);

    // });
    // console.log(this.data);
    console.error(this.data);
  

   }
  //  configUrl = 'assets/config.json';

  //  getConfig() {
  //    return this.http.get(this.configUrl);
  //  }

  // getConfig() {
  //   return this.http.get(this.configUrl);
  // }
  public generateFrequencyData() {
    return this.data.dupa.map( (dataPoint) => {
      return [dataPoint.offset, dataPoint.value];
    })

  }

  public getData() {
    return this.generateFrequencyData();
  }

}
