import { SearchUserService } from './../search-user/search-user.service';
import { Component, OnInit } from '@angular/core';
import { GithubproxyService } from '../proxies/githubproxy.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Array<User> = new Array<User>();

  constructor(private service: SearchUserService, private router: Router) { }

  ngOnInit() {
    console.log('Ejecuto el ngOnInit');
    this.service.searchAll().subscribe(
      (response) => {
        response.map(res => {
          console.log(res);
          res.subscribe(
            user => {
              console.log(user);
              return this.users.push(user);
            }
          );
        });
      }
    );
  }

  searchUser(username: string): void {
    this.router.navigate(['detail', username]);
  }

}
