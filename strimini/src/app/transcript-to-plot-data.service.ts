import { Injectable } from '@angular/core';
import * as transcriptData from '../assets/data.json';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscriptToPlotDataService {

  public data: any = transcriptData;

  constructor() {
    // console.error(this.data);
   }

  public generateFrequencyData() {
    return this.data.default.map( (dataPoint) => {
      return [dataPoint.offset, dataPoint.value];
    })

  }

  public getData() {
    return this.generateFrequencyData();
  }

}
