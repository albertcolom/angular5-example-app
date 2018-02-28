import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  title = 'Users';
  users: User[];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
    });
  }
}
