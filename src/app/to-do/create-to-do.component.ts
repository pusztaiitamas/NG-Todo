import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ToDo} from "./toDoInterface";


@Component({
    selector: 'todo-create-to-do',
    template: `
        <form [formGroup]="toDoForm" (submit)="onSubmit()" style="text-align: center">
            <label for="createToDo">Add todo</label><br>
            <input type="text" id="createToDo" formControlName="createToDo">
            <button type="submit">Create to do</button>
        </form>
        <div class="newToDoElement">
            <ul>
                <li *ngFor="let todo of todos" style="text-align: center">
                    {{todo.title}}</li>
            </ul>
        </div>
    `,
    styles: []
})
export class CreateToDoComponent implements OnInit {
    todos: ToDo[] = [];

    toDoForm: FormGroup = new FormGroup({
        createToDo: new FormControl(null, [
            Validators.required,
            Validators.minLength(6)
        ])
    })

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        const newToDo: ToDo = {
            title: this.toDoForm.value.createToDo
        }
        this.todos.push(newToDo);
        console.log(this.todos)
        console.log(this.toDoForm.value)
        console.log(this.todos)
        this.toDoForm.reset()

    }

}
