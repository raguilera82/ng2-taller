import { User } from './../model/user';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {


  @Input() public user: User;

  @Output() public selected: EventEmitter<User> = new EventEmitter<User>();

  @HostListener('click', ['$event'])
  onClick() {
    this.selected.emit(this.user);
  }

  constructor() { }

  ngOnInit() {
  }




}
