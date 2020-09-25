import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { QuestionsComponent } from '../questions/questions.component';
import { UsersService } from '../../../services/users.service';
import { QuestionListModule } from '../../common/question-list/question-list.module';

@NgModule({
  declarations: [
    UsersComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    QuestionListModule
  ],
  providers: [
    UsersService,
  ],
})

export class UsersModule { }
