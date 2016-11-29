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

  private getUser(json: any): User {
    return new User(json.login, json.name, json.company, json.id, json.avatar_url, json.admin);
  }

}
