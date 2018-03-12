import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  album: string;
  test: string;
  userName: string;
  userEmail: string;
  

  getServerData(event){
    console.log(event)
  }

  getBlueprintData(event){
    console.log(event)
  }

  getTestData(event){
    // console.log(event)
    this.test = event;
  }

  getUserDetails(event) {
    console.log(event);
    this.userName = event.userName;
    this.userEmail = event.userEmail;

  }
}
