import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Tesla', ticker: 'TSLA',  cols: 1, rows: 1, img: 'assets/img/chart.png' },
          { title: 'Google Inc.', ticker: 'GOOGL', cols: 1, rows: 1, img: 'assets/img/chart.png' },
          { title: 'Asseco', ticker: 'ACP', cols: 1, rows: 1, img: 'assets/img/chart.png' },
        ];
      }

      return [
        { title: 'Tesla', cols: 1, rows: 1, img: 'assets/img/chart.png' },
        { title: 'Google Inc. ', cols: 1, rows: 1, img: 'assets/img/chart.png' },
        { title: 'Asseco', cols: 1, rows: 1, img: 'assets/img/chart.png' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  public clickHandler(id: string) {
    this.router.navigateByUrl(`stockDetail/${id}`);
  }
}
