import { User } from './../model/user';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {


  @Input() private user: User;

  @Output() private selected: EventEmitter<User> = new EventEmitter<User>();

  @HostListener('click', ['$event'])
  onClick(e) {
    this.selected.emit(this.user);
  }

  constructor() { }

  ngOnInit() {
  }




}
