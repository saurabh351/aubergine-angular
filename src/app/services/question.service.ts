import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  public BASE_URL: string = environment.BASE_URL;

  constructor(
    private usersService: UsersService
  ) {
  }

  // Get Questions List
  public getFeaturedQuestionsList() {
    return new Promise((resolve, reject) => {
      const url = `${this.BASE_URL}questions/featured?site=stackoverflow&filter=default`;
      this.usersService.get(url)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err.error);
        });
    });
  }

}
