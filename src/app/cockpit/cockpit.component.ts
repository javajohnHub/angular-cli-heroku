import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() testData = new EventEmitter<string>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  @ViewChild('testChild') testInput: ElementRef;
  geolocationPosition;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onTest(input: HTMLInputElement){
    this.testData.emit(this.testInput.nativeElement.value);
   }
  

}
