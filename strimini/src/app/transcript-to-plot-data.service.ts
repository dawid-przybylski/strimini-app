import { Injectable } from '@angular/core';
import * as transcriptData from './data';
import { HttpClient } from '@angular/common/http';
import { take, map , tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranscriptToPlotDataService {

  public data: any = transcriptData;
  // public data = JSON.parse(JSON.stringify(transcriptData));
  constructor(private httpClient: HttpClient) {


    this.httpClient.get('/assets/data.json').pipe(
      take(1),
      map(data => this.data)
    );
  
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

  public getData(): Observable<any> {

    return this.httpClient.get('/assets/data.json').pipe(
      
    //  tap(data=> JSON.parse(data)),
      map(dataPoint  => {return [(dataPoint as any).offset, (dataPoint as any).value]}),
      
    );
  }

}
