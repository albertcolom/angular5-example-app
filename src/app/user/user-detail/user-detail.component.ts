import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  title = 'User detail';
  user: User;
  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => [
      this.getUserDetail(params['id'])
    ]);
  }

  getUserDetail(userId: string) {
    this.userService.getUserById(userId).subscribe((user: User) => {
      this.user = user;
    });
  }
 }
