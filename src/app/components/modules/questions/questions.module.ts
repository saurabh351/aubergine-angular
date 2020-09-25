import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionService } from '../../../services/question.service';
import { QuestionListComponent } from '../../common/question-list/question-list.component';
import { QuestionListModule } from '../../common/question-list/question-list.module';

@NgModule({
  declarations: [
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    QuestionListModule
  ],
  exports: [
    QuestionsComponent,
  ],
  providers: [
    QuestionService,
  ]
})

export class QuestionsModule { }
