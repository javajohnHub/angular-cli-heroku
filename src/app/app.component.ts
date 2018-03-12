import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  album: string;

  getServerData(event){
    console.log(event)
  }

  getBlueprintData(event){
    console.log(event)
  }
}
