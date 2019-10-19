import { Injectable } from '@angular/core';
import * as transcriptData from '../assets/data.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscriptToPlotDataService {

  public data = transcriptData;

  // public data = JSON.parse(JSON.stringify(transcriptData));
  constructor(private http: HttpClient) {
    // this.http.get('assets/ordersummary.json')//, options)
    // const configUrl = 'assets/data.json';

    // this.http.get(configUrl).subscribe((data) => {
    //   this.data = data;
    //   console.log(this.data);

    // });
    // console.log(this.data);

   }
  //  configUrl = 'assets/config.json';

  //  getConfig() {
  //    return this.http.get(this.configUrl);
  //  }

  // getConfig() {
  //   return this.http.get(this.configUrl);
  // }
  public generateFrequencyData() {
    return this.data.default.map( (dataPoint) => {
      return [dataPoint.offset, dataPoint.value];
    })

  }

  public getData() {
    return this.generateFrequencyData();
  }

}
