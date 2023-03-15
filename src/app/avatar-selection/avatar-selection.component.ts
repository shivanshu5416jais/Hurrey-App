import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../sharedModel';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styleUrls: ['./avatar-selection.component.css']
})
export class AvatarSelectionComponent {
  avatar: any;

  constructor(private Model:Model, private router:Router){
    this.loader=Model.loader
    this.disabled=true;
    this.name=Model.name
      }
      name:any;
      disabled:boolean
    loader:boolean;
    ngOnInit(): void {
      this.avatar=this.Model.avatarSelected
      if(this.avatar)
      this.disabled=false
      this.loader=this.Model.loader
      setTimeout(() => {
        this.loader=false
        this.Model.loader=false;
      }, 0);
    }
   
    changeAvatar(data:any){
    
      this.disabled=false
      this.Model.avatarSelected=data['target']['id'];
    }
    goNext(){
      this.router.navigateByUrl("/roomhome")
    } goBack(){
      this.router.navigateByUrl("/home")
    }
    }
    
