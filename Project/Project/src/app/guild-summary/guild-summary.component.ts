import { Component, OnInit } from '@angular/core';
import { GuildService } from '../guild.service';
import { Guild } from '../guild';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guild-summary',
  templateUrl: './guild-summary.component.html',
  styleUrls: ['./guild-summary.component.scss']
})
export class GuildSummaryComponent implements OnInit {
  guilds: Guild;
  constructor(private guildService: GuildService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getGuildsummary(params['realm'], params['name']);
    });
  }
  private getGuildsummary(realm: string, name: string) {
    this.guildService.getGuildsummary(realm, name).subscribe(guilds => {
      this.guilds = guilds;
    });
  }

}
