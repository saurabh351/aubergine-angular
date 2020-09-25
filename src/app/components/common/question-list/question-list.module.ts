import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    QuestionListComponent
  ]
})
export class QuestionListModule { }
