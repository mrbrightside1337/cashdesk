import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitteService } from '../shared/event-emitter.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  products = new Map<Product, number>();
  sum = 0;
  deposit = 0;

  private productAddedSubject: Subject<Product>;


  constructor(private eventEmitter: EventEmitteService) {
    this.productAddedSubject = this.eventEmitter.getProductAddedSubject();
  }

  ngOnInit(): void {
    this.productAddedSubject.subscribe(product => this.addProduct(product));
  }

  reset() {

    this.products.clear();

    this.recalculate();
  }

  addProduct(product: Product) {

    const count = (this.products.get(product) ?? 0) + 1;
    this.products.set(product, count);

    this.recalculate();
  }

  removeProduct(product: Product) {

    let count = this.products.get(product);

    if (count && count > 1) {
      count--;
      this.products.set(product, count);
    } else {
      this.products.delete(product);
    }

    this.recalculate();
  }

  private recalculate() {
    let sum = 0;
    let deposit = 0;
    for (const entry of this.products) {
      sum += entry[0].price * entry[1];

      if (entry[0].deposit > 0) {
        deposit += entry[0].deposit * entry[1];
      }
    }

    this.sum = sum;
    this.deposit = deposit;
  }
}
