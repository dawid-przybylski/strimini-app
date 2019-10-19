import { Injectable } from '@angular/core';
import { IStockModel } from './istack-model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocks: IStockModel[];

  constructor() {
    this.stocks = [
      { title: 'Tesla', cols: 1, rows: 1, img: 'assets/img/chart.png', value: 0 },
      { title: 'Google Inc.', cols: 1, rows: 1, img: 'assets/img/chart.png', value: 0 },
      { title: 'Asseco', cols: 1, rows: 1, img: 'assets/img/chart.png', value: 0 },
    ];
  }


  getStock(id: string): IStockModel {
    console.error(this.stocks, id);
    const s = this.stocks.find(stock => stock.title === id);
    console.error('getStock', s);
    return s;
  }
}
