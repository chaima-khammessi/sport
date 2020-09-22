import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdressComponent } from './components/adress/adress.component';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EventComponent } from './components/event/event.component';
import { EcrangeantComponent } from './components/ecrangeant/ecrangeant.component';
import { CartnewsComponent } from './components/cartnews/cartnews.component';
import { EcranmatchComponent } from './components/ecranmatch/ecranmatch.component';
import { TableaumatchComponent } from './components/tableaumatch/tableaumatch.component';
import { BouttonpaginationComponent } from './components/bouttonpagination/bouttonpagination.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { InfoComponent } from './components/info/info.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddMatchComponent } from './components/add-match/add-match.component';
import { PlayersComponent } from './components/players/players.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { MatchComponent } from './components/match/match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayAdminComponent } from './components/display-admin/display-admin.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TrColorDirective } from './directives/tr-color.directive';
import { AddPlayerComponent } from './components/add-player/add-player.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AdressComponent,
    ServiceComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    MatchesComponent,
    EventComponent,
    EcrangeantComponent,
    CartnewsComponent,
    EcranmatchComponent,
    TableaumatchComponent,
    BouttonpaginationComponent,
    CarouselComponent,
    CardComponent,
    InfoComponent,
    AddMatchComponent,
    PlayersComponent,
    DisplayMatchComponent,
    MatchComponent,
    DisplayPlayerComponent,
    DisplayUserComponent,
    DisplayAdminComponent,
    EditUsersComponent,
    SingleUserComponent,
    ReversePipe,
    TrColorDirective,
    AddPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
