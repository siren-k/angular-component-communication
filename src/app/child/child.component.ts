import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() age: number = 0;
  @Output() plus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.plus.emit();
    }, 2000);
  }

}
