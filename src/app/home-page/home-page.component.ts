import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../sharedModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  constructor(private Model:Model, private router:Router){
    this.name=this.Model.name
   
this.loader=Model.loader
this.disabled=true;
  }
  name:any;
  disabled:boolean
loader:boolean;
ngOnInit(): void {
  if(this.name)
  this.disabled=false
  this.loader=this.Model.loader
  setTimeout(() => {
    this.loader=false
    this.Model.loader=false;
  }, 2000);
}
valueChange(data:any){
  this.Model.name=data
if(data){
  this.disabled=false
}
else
this.disabled=true
}
goNext(){
  this.router.navigateByUrl("/avatarselection")
}
changeEvent(event:any){
  var charCode=(event.which)?event.which:event.keyCode
 if(charCode>31 && (charCode<48 || charCode>57)&& charCode!=45 && charCode!=46)
 return true
 return false
}
}
