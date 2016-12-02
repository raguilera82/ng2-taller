import { SearchUserService } from './search-user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  user: User;
  error: string;

  constructor(private service: SearchUserService) {}

  ngOnInit(){}

  search(username: string): void {
    this.user = null;
    this.error = null;
    this.service.search(username).subscribe(
      user => this.user = user,
      error => this.error = error
    );
  }

  userSelected(event) {
    alert(event.name);
  }

}
