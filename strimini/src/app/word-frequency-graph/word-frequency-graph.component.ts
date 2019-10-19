import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TranscriptToPlotDataService } from '../transcript-to-plot-data.service';
// import { google } from 
// declare let google: any;

@Component({
  selector: 'app-word-frequency-graph',
  templateUrl: './word-frequency-graph.component.html',
  styleUrls: ['./word-frequency-graph.component.scss'],
  providers:  [ TranscriptToPlotDataService ]
})
export class WordFrequencyGraphComponent implements OnInit {
  // constructor() { }
  public myData = [
    [12, 2],
    [13, 4],
    [15, 1],
  ];
  
  ngOnInit() {
    this.myData = this.service.getData();
  }


  // public data = new google.visualization.DataTable();

  constructor(private service: TranscriptToPlotDataService) { }

  public options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Frequency'
    }
  };

  public myColumnNames = ['City', 'Inhabitants'];

}