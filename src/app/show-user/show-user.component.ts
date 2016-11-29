import { User } from './../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  @Input() private user: User;

  constructor() { }

  ngOnInit() {
  }

}
