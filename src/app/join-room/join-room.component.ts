import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../sharedModel';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent {
  avatar: any;

 
  constructor(private Model:Model, private router:Router){
this.avatar=Model.avatarSelected
  this.loader=Model.loader
  this.name=Model.name;
this.disabled=true;
  }
  roomCode:any
  name:any;
  disabled:boolean
loader:boolean;
ngOnInit(): void {
  this.loader=this.Model.loader
  setTimeout(() => {
    this.loader=false
    this.Model.loader=false;
  }, 0);
}
valueChange(data:any){
  this.Model.roomCode=data
if(data && data.length>=6){

  this.disabled=false
}
else
this.disabled=true
}
joinRoom(){
  this.router.navigateByUrl("/joinroom")
}  


changeEvent(event:any){
  var charCode=(event.which)?event.which:event.keyCode
 if(charCode>31 && (charCode<48 || charCode>57)&& charCode!=45 && charCode!=46)
 return false
 return true
}
goBack(){
  this.router.navigateByUrl("/roomhome")
}
}
