import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public featuredQuestionsList = [];

  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  async getQuestions() {
    try {
      const result: any = await this.questionService.getFeaturedQuestionsList();
      if (result && result.items) {
        this.featuredQuestionsList = result.items;
      } else {
        alert('Something went wrong, please try again');
      }
    } catch (error) {
      console.log(error);
    }
  }

}
