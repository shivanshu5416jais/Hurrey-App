import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { RoomHomeComponent } from './room-home/room-home.component';

const routes: Routes = [
  { path: 'home', 
  component: HomePageComponent 
 
}, { path: 'avatarselection', 
component: AvatarSelectionComponent ,
canActivate:[AuthGuard]

}, { path: 'roomhome', 
component: RoomHomeComponent ,
canActivate:[AuthGuard]

}, { path: 'createroom', 
component: CreateRoomComponent ,
canActivate:[AuthGuard]

}, { path: 'joinroom', 
component: JoinRoomComponent ,
canActivate:[AuthGuard]

},
{
  path: '',
  pathMatch: 'prefix', //default
  redirectTo: 'home'
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
