import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  @Output () userNameOutput = new EventEmitter<{userName: string, userEmail: string}>();
  @ViewChild ('userName') userInputName: ElementRef;
  @ViewChild ('userEmail') userEmail: ElementRef;
  

  constructor() { }

  ngOnInit() {
  }

  getUserInfo(nameInput: HTMLInputElement) {
    console.log(this.userEmail);
     this.userNameOutput.emit({
       userName: this.userInputName.nativeElement.value,
       userEmail: this.userEmail.nativeElement.value 
     });
  }
}
