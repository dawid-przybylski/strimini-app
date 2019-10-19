import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TranscriptToPlotDataService } from '../transcript-to-plot-data.service';
import { Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';
// import { google } from 
// declare let google: any;

@Component({
  selector: 'app-word-frequency-graph',
  templateUrl: './word-frequency-graph.component.html',
  styleUrls: ['./word-frequency-graph.component.scss'],
  providers: [TranscriptToPlotDataService]
})
export class WordFrequencyGraphComponent implements OnInit {
  // constructor() { }
  public myData: Observable<any>;

  public options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Frequency'
    }
  };

  public myColumnNames = ['City', 'Inhabitants'];

  ngOnInit() {
    this.myData = this.service.getData().pipe(
      tap(data => console.error(data),
        share()
      )


    )
  }


  constructor(private service: TranscriptToPlotDataService) { }


}