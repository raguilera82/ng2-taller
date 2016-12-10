import { GithubproxyService } from './../proxies/githubproxy.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class SearchUserService {

  constructor(private proxy: GithubproxyService) { }

  search(username: string): Observable<User> {
    return this.proxy.search(username)
    .map(response => this.getUser(response.json()));
  }

  searchAll(): Observable<User[]> {
    return this.proxy.searchAll().map(
      response => {
        return response.json().map(one => this.builderUser(one));
      }
    );
  }

  private getUser(json: any): User {
    return new User(json.login, json.name, json.company, json.id, json.avatar_url, json.admin);
  }

  private builderUser(json: any): Observable<User> {
    console.log(json.login);
    return this.search(json.login).map(
      user => {
        return user;
      }
    )
  }

}
