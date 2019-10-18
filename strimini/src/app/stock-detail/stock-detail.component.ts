import { Component, OnInit } from '@angular/core';
import { IStockModel } from '../istack-model';
import { StockService } from '../stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {

  stock: IStockModel;

  constructor(private stockService: StockService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    console.error(this.activeRoute.snapshot.params.id);
    console.error(this.activeRoute);
    this.stock = this.stockService.getStock(this.activeRoute.snapshot.params.id);
  }

}
