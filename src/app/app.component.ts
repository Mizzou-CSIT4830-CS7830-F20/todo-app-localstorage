import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(300px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ]),
      transition('*=>void', [
        style({ transform: 'translateX(0px)' }),
        animate(
          100,
          keyframes([
            style({ transform: 'translateX(0px)' }),
            style({ transform: 'translateX(300px)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'todo-app-localstorage';

  todoArray = [];

  todoForm = this.fb.group({
    todo: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  addTodo() {
    let value = this.todoForm.value.todo;
    if (value != '') {
      this.todoArray.push(value);
      console.log(this.todoArray);
      this.todoForm.reset();
    } else {
      alert('Todo Field Required!!');
    }
  }
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log('delete item');
      }
    }
  }
}
