import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class Model{
     loader:boolean=true;
  name: any;
  avatarSelected: any="";
  roomCode: any;
  noOfPlayers: any;
  roomName: any;
     
}