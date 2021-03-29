import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  inputTodoTitle:string = ''
  inputTodoIsCompleted:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onInsertTodoItem:EventEmitter<any> = new EventEmitter()
  frmInsertTodoItem(){
    this.onInsertTodoItem.emit(this.inputTodoTitle)
    console.log(this.inputTodoTitle)
  }

}
