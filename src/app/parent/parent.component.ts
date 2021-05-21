import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() age: number = -1;
  @Output() plus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    this.plus.emit();
  }

}
