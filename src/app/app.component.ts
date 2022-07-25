import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  title: string = 'todo-app';
  todo: FormControl = new FormControl('');
  todos: string[] = [];
  newTodo() {
    if (this.todo && this.todo.value) this.todos.push(this.todo.value);
    this.todo.setValue('');
  }
}
