import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-word-frequency-graph',
  templateUrl: './word-frequency-graph.component.html',
  styleUrls: ['./word-frequency-graph.component.scss']
})
export class WordFrequencyGraphComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public myData = [
    [12, 2],
    [13, 4],
    [15, 1],
    [20, 0],
    [25, 8],
    [30, 0],
  ];

  public options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Frequency'
    }
  };

}