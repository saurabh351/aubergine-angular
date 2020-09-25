import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public BASE_URL: string = environment.BASE_URL;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(URL) {
    const response = this.httpClient.get(URL).pipe(map(res => res));
    return response;
  }

  // Get User Details By Id
  public getUserDetailsById(userId) {
    return new Promise((resolve, reject) => {
      const url = `${this.BASE_URL}users/${userId}?site=stackoverflow&filter=default`;
      this.get(url)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err.error);
        });
    });
  }

  // Get User Details By Id
  public getUserTags(userId) {
    return new Promise((resolve, reject) => {
      const url = `${this.BASE_URL}users/${userId}/tags?site=stackoverflow&filter=default`;
      this.get(url)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err.error);
        });
    });
  }

    // Get Questions On User
    public getQuestionsOnUser(userId) {
      return new Promise((resolve, reject) => {
        const url = `${this.BASE_URL}users/${userId}/questions?site=stackoverflow&filter=default`;
        this.get(url)
          .subscribe((res) => {
            resolve(res);
          }, (err) => {
            reject(err.error);
          });
      });
    }

}
