import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingDetailComponent } from './meeting-detail/meeting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    MeetingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
