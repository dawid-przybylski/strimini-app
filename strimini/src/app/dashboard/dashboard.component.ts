import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
          { title: 'Tesla', cols: 1, rows: 1, img: 'assets/img/chart.png' },
          { title: 'Trump', cols: 1, rows: 1, img: 'assets/img/chart.png' },
          { title: 'Asseco', cols: 1, rows: 1, img: 'assets/img/chart.png' },
          
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1, img: 'assets/img/chart.png' },
        { title: 'Card 2', cols: 1, rows: 1, img: 'assets/img/chart.png' },
        { title: 'Card 3', cols: 1, rows: 2, img: 'assets/img/chart.png' },
        ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
