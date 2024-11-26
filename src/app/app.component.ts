import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: string[] = [];
  newTodo: string = '';

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
      this.saveTodos();
    }
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  fetchTodos(): void {
    const savedTodos = localStorage.getItem('todos');
    this.todos = savedTodos ? JSON.parse(savedTodos) : [];
    // console.log(this.todos)
  }
}
