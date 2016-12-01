import { SearchUserService } from './search-user/search-user.service';
import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  error: string;

  constructor(private service: SearchUserService) {}

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
