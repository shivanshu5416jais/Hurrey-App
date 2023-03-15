import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../sharedModel';

@Component({
  selector: 'app-room-home',
  templateUrl: './room-home.component.html',
  styleUrls: ['./room-home.component.css']
})
export class RoomHomeComponent implements OnInit{
  avatar: any;

 
    constructor(private Model:Model, private router:Router){
  this.avatar=Model.avatarSelected
    this.loader=Model.loader
    this.name=Model.name;
  this.disabled=true;
    }
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
    this.Model.name=data
  if(data){
    this.disabled=false
  }
  else
  this.disabled=true
  }
  joinRoom(){
    this.router.navigateByUrl("/joinroom")
  }  
  createRoom(){
    this.router.navigateByUrl("/createroom")
  }
  goBack(){
    this.router.navigateByUrl("/avatarselection")
  }
  }
  
