import { Component } from '@angular/core';

@Component({
  selector: 'app-toodolist',
  templateUrl: './toodolist.component.html',
  styleUrls: ['./toodolist.component.css']
})
export class ToodolistComponent  {

    newTodoTitle: string = '';

    todos: Array<Todo> = [
    {
      title: 'zakupy',
      complete: true
    },
    {
      title: 'kino',
      complete: false
    }];


    addTask() {
      if (!this.newTodoTitle) {
        return;
      }
      const newTodo: Todo = {
        title: this.newTodoTitle,
        complete: false
      };
      this.todos.push(newTodo);

      this.newTodoTitle = '';


    }

    deleteTask(index) {
      this.todos.splice(index,1);
      
    }


}

interface Todo {
  title: string;
  complete: boolean;
}
