import { Component, OnInit } from '@angular/core';
import { ITodos } from '../ITodos';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todos:ITodos[] = [
    {
      id:1,
      title: 'todo title sdfv dfsdg fb1',
      isCompleted: true,
      published_date: '2021.03.29'
    },
    {
      id:2,
      title: 'todo title 2',
      isCompleted: false,
      published_date: '2021.03.29'
    },
    {
      id:3,
      title: 'todo title 3',
      isCompleted: true,
      published_date: '2021.03.29'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  insertTodo(todoTitle:any){
    let nr = this.todos.length + 1

    this.todos.push(
      {
        id: nr,
        title: todoTitle,
        isCompleted: true,
        published_date: '2021.03.29'
      }
    )
  }

}
