import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

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
          { title: 'Fox News', cols: 1, rows: 1, img: 'assets/img/fox-news-logo.png', mentions: 14 },
          { title: 'BBC', cols: 1, rows: 1, img: 'assets/img/bbc-logo.png', mentions: 11 },
          { title: 'Al Jazeera', cols: 1, rows: 1, img: 'assets/img/aljazeera.jpg', mentions: 7 },
          { title: 'Twitter', cols: 1, rows: 1, img: 'assets/img/twitter-logo.png', mentions: 5 },
          { title: 'CNN', cols: 1, rows: 1, img: 'assets/img/cnn-logo.png', mentions: 2 },
          { title: 'TVN24', cols: 1, rows: 1, img: 'assets/img/tvn24-logo.jpg', mentions: 3 },
          { title: 'Bloomberg', cols: 1, rows: 1, img: 'assets/img/bloomberg-tv-logo.png', mentions: 4 },
          { title: 'RussiaToday', cols: 1, rows: 1, img: 'assets/img/russia-today.png', mentions: 0 },
        ];
      }

      return [
        { title: 'Fox News', cols: 1, rows: 1, img: 'assets/img/fox-news-logo.png' },
        { title: 'BBC', cols: 1, rows: 1, img: 'assets/img/bbc-logo.png' },
        { title: 'Al Jazeera', cols: 1, rows: 1, img: 'assets/img/aljazeera.jpg' },
        { title: 'Twitter', cols: 1, rows: 1, img: 'assets/img/twitter-logo.png' },
        { title: 'CNN', cols: 1, rows: 1, img: 'assets/img/cnn-logo.webp' },
        { title: 'TVN24', cols: 1, rows: 1, img: 'assets/img/tvn24-logo.jpg' },
        { title: 'Bloomberg', cols: 1, rows: 1, img: 'assets/img/bloomberg-tv-logo.webp' },
        { title: 'RussiaToday', cols: 1, rows: 1, img: 'assets/img/russia-today.png' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
  // constructor() { }

  ngOnInit() {
  }

  public mediaAssetClicked(card) {
    this.router.navigateByUrl(`/mediaAsset/${card.title}`);
  }

}
