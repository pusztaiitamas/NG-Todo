import { Injectable } from '@angular/core';
import {ToDo} from "./toDoInterface";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  static URL = ' http://localhost:3000/todo'

  constructor(private http: HttpClient) { }
}
addToDo(todo: ToDo | undefined): Observable<ToDo>{
  return this.http.post<ToDo>( ToDoService.URL.todo );
}
