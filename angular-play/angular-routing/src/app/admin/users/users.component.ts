import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  hasPermission = true;

  constructor() { }

  ngOnInit() {
    if (this.hasPermission){
        this.getUsers()
          .then(users => this.users = users)
          .catch(e => console.log(e.message));
    }else {
        this.users = [];
    }
  }

  async getUsers() {
    return [
      {name: 'dan', email: 'dan.sabadis@siemens.com'},
      {name: 'john', email: 'john@siemens.com'}
    ];
  }
}
