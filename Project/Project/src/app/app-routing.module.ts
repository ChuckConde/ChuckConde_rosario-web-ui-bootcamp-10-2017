import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuildComponent } from './guild/guild.component';
import { PvpComponent } from './pvp/pvp.component';
import { RealmsComponent } from './realms/realms.component';
import { PlayerComponent } from './player/player.component';
import { PlayerSummaryComponent } from './player-summary/player-summary.component';
import { GuildSummaryComponent } from './guild-summary/guild-summary.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'realms', component: RealmsComponent },
    { path: 'guild', component: GuildComponent},
    { path: 'pvp', component: PvpComponent},
    { path: 'player', component: PlayerComponent },
    { path: 'playersummary/:realm/:name', component: PlayerSummaryComponent},
    { path: 'guildsummary/:realm/:name', component: GuildSummaryComponent},
    { path: '**', redirectTo: '' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            useHash: true
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
