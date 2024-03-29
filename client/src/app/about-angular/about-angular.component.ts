import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './../_models/user';
import { AccountService } from './../_services/account.service';

@Component({
  selector: 'app-about-angular',
  templateUrl: './about-angular.component.html',
  styleUrls: ['./about-angular.component.css']
})
export class AboutAngularComponent implements OnInit{
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {}
  
  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    this.accountService.setCurrnentUser(user);
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
