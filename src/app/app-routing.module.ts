import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdressComponent } from './components/adress/adress.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {ServiceComponent } from './components/service/service.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { PlayersComponent } from './components/players/players.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },

  {
    path : 'login',
    component : LoginComponent 
  },
  {
    path: 'adress',
    component : AdressComponent
  },
  {
    path:'service',
    component : ServiceComponent

  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
  path : 'admin',
  component : AdminComponent
},
{
  path:'matches',
  component:MatchesComponent
},
{
  path:'signup',
  component:SignupComponent

},
{
  path:'add-match',
 component:AddMatchComponent
},
{
  path:'players',
  component:CardComponent
}, 
{
  path:'displayMatch/:id',
  component:DisplayMatchComponent
},
{
  path:'display-player/:id',
  component:DisplayPlayerComponent
},
{
  path:'display-user/:id',
  component:SingleUserComponent
},
{
  path:'editUser/:id',
  component:EditUsersComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
