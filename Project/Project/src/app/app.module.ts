import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PvpComponent } from './pvp/pvp.component';
import { FooterComponent } from './footer/footer.component';
import { RealmsComponent } from './realms/realms.component';
import { HttpModule } from '@angular/http';
import { RealmsService } from './realms.service';
import { PvpService } from './pvp.service';
import { Pvp3v3Service } from './pvp3v3.service';
import { PvprbgService } from './pvprbg.service';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player.service';
import { PlayerSummaryComponent } from './player-summary/player-summary.component';
import { GuildComponent } from './guild/guild.component';
import { GuildSummaryComponent } from './guild-summary/guild-summary.component';
import { GuildService } from './guild.service';
import { FormsModule } from '@angular/forms';
import { ActionService } from './action.service';
import { ClassService } from './class.service';
import { RaceService } from './race.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PvpComponent,
    FooterComponent,
    RealmsComponent,
    PlayerComponent,
    PlayerSummaryComponent,
    GuildComponent,
    GuildSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    RealmsService,
    PvpService,
    Pvp3v3Service,
    PvprbgService,
    PlayerService,
    GuildService,
    ActionService,
    ClassService,
    RaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
