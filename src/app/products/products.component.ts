import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitteService } from '../shared/event-emitter.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private productAddedSubject: Subject<Product>;

  products: Array<Product> = [
    {
      name: 'Burger',
      price: 8.00,
      deposit: 0,
    }, {
      name: 'Steak',
      price: 4.50,
      deposit: 0,
    }, {
      name: 'Curry-Wurst',
      price: 3.50,
      deposit: 0,
    }, {
      name: 'Cola/Fanta/Mezzo',
      price: 2.00,
      deposit: 1,
    }, {
      name: 'Bier',
      price: 3.00,
      deposit: 1,
    }
  ];

  constructor(private eventEmitter: EventEmitteService) {
    this.productAddedSubject = this.eventEmitter.getProductAddedSubject();
  }

  ngOnInit(): void {
  }

  addProduct(product: Product): void {

    console.log(`Product added ${JSON.stringify(product)}`);
    this.productAddedSubject.next(product);
  }

}
