import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    TestComponentComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
