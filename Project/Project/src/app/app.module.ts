import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PvpComponent } from './pvp/pvp.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { GuildsComponent } from './guilds/guilds.component';
import { FooterComponent } from './footer/footer.component';
import { RealmsComponent } from './realms/realms.component';
import { HttpModule } from '@angular/http';
import { RealmsService } from './realms.service';
import { PvpService } from './pvp.service';
import { Pvp3v3Service } from './pvp3v3.service';
import { PvprbgService } from './pvprbg.service';
import { PlayerComponent } from './player/player.component';
import { PlayerSummaryComponent } from './player-summary/player-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PvpComponent,
    ChallengeComponent,
    GuildsComponent,
    FooterComponent,
    RealmsComponent,
    PlayerComponent,
    PlayerSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    RealmsService,
    PvpService,
    Pvp3v3Service,
    PvprbgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
