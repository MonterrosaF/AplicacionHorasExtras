import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { Users } from '../../Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];
  // id: string;
  // name: string;
  // username: string;
  // email: string;
  // phone: string;
  // website: string;

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit(): void {}
}
