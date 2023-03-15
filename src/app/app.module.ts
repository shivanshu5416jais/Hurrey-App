import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';
import { RoomHomeComponent } from './room-home/room-home.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AvatarSelectionComponent,
    RoomHomeComponent,
    JoinRoomComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
