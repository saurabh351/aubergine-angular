import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  public userDetails = {};
  public userTagsList = [];
  public questionsOnUserList = [];
  public userId;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.paramMap.get('id');
    this.getUserDetails();
    this.getUserTags();
    this.getQuestionsOnUser();
  }

  async getUserDetails() {
    try {
      const result: any = await this.usersService.getUserDetailsById(this.userId);
      if (result && result.items) {
        this.userDetails = result.items[0];
      } else {
        alert('Something went wrong, please try again');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getUserTags() {
    try {
      const result: any = await this.usersService.getUserTags(this.userId);
      if (result && result.items) {
        this.userTagsList = result.items;
      } else {
        alert('Something went wrong, please try again');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getQuestionsOnUser() {
    try {
      const result: any = await this.usersService.getQuestionsOnUser(this.userId);
      if (result && result.items) {
        this.questionsOnUserList = result.items;
      } else {
        alert('Something went wrong, please try again');
      }
    } catch (error) {
      console.log(error);
    }
  }

}
