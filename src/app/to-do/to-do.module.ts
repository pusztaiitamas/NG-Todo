import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateToDoComponent } from './create-to-do.component';
import {ToDoService} from "./to-do.service";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    CreateToDoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ CreateToDoComponent],
  providers: [ToDoService],
})
export class ToDoModule { }
