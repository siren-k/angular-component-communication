import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  age: number = 37;

  constructor() { }

  ngOnInit(): void {
  }

  plus(): void {
    this.age++;
  }

}
