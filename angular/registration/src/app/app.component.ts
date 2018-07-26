import { Component } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [];
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passconf: '',
    address: '',
    unit: '',
    city: '',
    state: '',
    lucky: '1'
  }

  onSubmit(userdata:NgForm){
    event.preventDefault();
    this.users.push(this.user);
    this.user = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passconf: '',
      address: '',
      unit: '',
      city: '',
      state: '',
      lucky: '1'
    }
    console.log(this.users[0]);
    userdata.reset();
  }
}
