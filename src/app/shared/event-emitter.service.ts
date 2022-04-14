import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class EventEmitteService {

  private productAddedSubject = new Subject<Product>();

  constructor() { }

  getProductAddedSubject(): Subject<Product> {
    return this.productAddedSubject;
  }
}
