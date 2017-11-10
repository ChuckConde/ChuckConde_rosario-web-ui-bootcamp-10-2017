import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { GuildsComponent } from './guilds/guilds.component';
import { PvpComponent } from './pvp/pvp.component';
import { RealmsComponent } from './realms/realms.component';
import { PlayerComponent } from './player/player.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'realms', component: RealmsComponent },
    { path: 'challenge', component: ChallengeComponent},
    { path: 'guilds', component: GuildsComponent},
    { path: 'pvp', component: PvpComponent},
    { path: 'player', component: PlayerComponent },
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
