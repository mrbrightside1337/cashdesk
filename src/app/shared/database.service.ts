import { Injectable, OnInit } from '@angular/core';
const sqlite3 = require('sqlite3');

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit {

  private db: any;

  constructor() { }

  ngOnInit(): void {

    this.db = new sqlite3.Database('./chashdesk.db');
    

  }
}
