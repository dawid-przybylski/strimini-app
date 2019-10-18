import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-asset-page',
  templateUrl: './asset-page.component.html',
  styleUrls: ['./asset-page.component.scss']
})
export class AssetPageComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'BBC', cols: 1, rows: 1, img: 'assets/img/bbc-logo.png' },
          { title: 'Al Jazeera', cols: 1, rows: 1, img: 'assets/img/aljazeera.jpg' },
          { title: 'Twitter', cols: 1, rows: 1, img: 'assets/img/twitter-logo.png' },
          { title: 'CNN', cols: 1, rows: 1, img: 'assets/img/cnn-logo.webp' },
          { title: 'TVN24', cols: 1, rows: 1, img: 'assets/img/tvn24-logo.jpg' },
          { title: 'Bloomberg', cols: 1, rows: 1, img: 'assets/img/bloomberg-tv-logo.webp' },
          { title: 'RussiaToday', cols: 1, rows: 1, img: 'assets/img/russia-today.png' },
        ];
      }

      // return [
      //   { title: 'Card 1', cols: 1, rows: 1, img: 'assets/img/chart.png' },
      //   { title: 'Card 2', cols: 1, rows: 1, img: 'assets/img/chart.png' },
      //   { title: 'Card 3', cols: 1, rows: 2, img: 'assets/img/chart.png' },
      //   ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
  // constructor() { }

  ngOnInit() {
  }

}
