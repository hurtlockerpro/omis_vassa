import { Component, Input, OnInit } from '@angular/core';
import { ITodos } from '../ITodos';

@Component({
  selector: 'app-todorow',
  templateUrl: './todorow.component.html',
  styleUrls: ['./todorow.component.scss']
})
export class TodorowComponent implements OnInit {

  @Input() todoTitle:string = ''
  @Input() todo:ITodos = { id:0, title:'', isCompleted:true, published_date:''}

  constructor() { }

  ngOnInit(): void {
  }

}
