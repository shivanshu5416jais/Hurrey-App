import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from '../sharedModel';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  avatar: any;
roomName:any;
noOfPlayers:any;
  requiredForm: FormGroup;
 
  constructor(private Model:Model, private router:Router,private fb: FormBuilder){
    this.requiredForm = this.fb.group({
      roomName: ['', [Validators.required, 
  ]],
         noOfPlayers:['',[Validators.required]]
      });
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
nameChange(data:any){
  this.Model.roomName=data
if(data && this.Model.noOfPlayers){

  this.disabled=false
}
else
this.disabled=true
}
playerChange(data:any){
 
    this.Model.noOfPlayers=data
  if(data && this.Model.roomName){
  
    this.disabled=false
  }
  else
  this.disabled=true
  
}

 


createRoom(){
  // this.router.navigateByUrl("/createroom")
}  


changeEvent(event:any){
  if(this.noOfPlayers)
  return false;
  
  var charCode=(event.which)?event.which:event.keyCode
 if(charCode>=49 && charCode <=53)
 return true
 return false
}
goBack(){
  this.router.navigateByUrl("/roomhome")
}
}
