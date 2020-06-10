import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    new Todo(1, 'Take breakfast', 'Take a light breakfast in preparation for the day', new Date(2020, 6, 10), new Date(2020, 6, 10)),
    new Todo(2, 'Attend Standup session', 'Attend a revision session covering what was done on 9th June', new Date(2020, 6, 10), new Date(2020, 6, 10)),
    new Todo(3, 'Complete Todo Exercise', 'Complete the Todo List Angular Exercise', new Date(2020, 6, 10), new Date(2020, 6, 11)),
    new Todo(4, 'Review Wednesday Material', 'Review Canvas material for Wednesday', new Date(2020, 6, 10), new Date(2020, 6, 12)),
    new Todo(5, 'Attempt Week 1 IP', 'Break down week 1 IP into sub-sections', new Date(2020, 6, 10), new Date(2020, 6, 13)),
    new Todo(6, 'Post Blockers in Slack', 'Post the week\'s blockers in Slack channel', new Date(2020, 6, 8), new Date(2020, 6, 13)),
    new Todo(7, 'Watch Mosh\'s Angular video', 'Watch Mosh\'s introduction to angular and Typescript to gain more insight', new Date(2020, 6, 14), new Date(2020, 6, 15)),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
