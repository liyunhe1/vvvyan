import { Component, OnInit } from '@angular/core';

interface User {
  username: string
  password: string
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: User = {
    username: "admin",
    password: "test"
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user)
  }
}
