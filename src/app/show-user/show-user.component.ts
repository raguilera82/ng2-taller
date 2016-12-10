import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../model/user';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SearchUserService } from '../search-user/search-user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  isBack: boolean = false;

  @Input() public user: User;

  @Output() public selected: EventEmitter<User> = new EventEmitter<User>();

  @HostListener('click', ['$event'])
  onClick() {
    this.selected.emit(this.user);
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: SearchUserService) { }

  ngOnInit() {
    let username: string = this.route.snapshot.params['username'];
    if (username) {
      this.isBack = true;
      this.service.search(username).subscribe(
        user => this.user = user
      );
    }
  }

  back(): void {
    this.router.navigate(['searchAll']);
  }




}
