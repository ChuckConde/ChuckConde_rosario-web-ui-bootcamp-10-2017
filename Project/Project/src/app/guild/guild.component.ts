import { Component, OnInit } from '@angular/core';
import { RealmsService } from '../realms.service';
import { Realms } from '../realms';
import { GuildService } from '../guild.service';
import { Guild } from '../guild';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
  guild: string;
  realm: string;
  realms: Realms[] = [];
  constructor(private realmsService: RealmsService, private guildService: GuildService, private router: Router) { }

  ngOnInit() {
    this.realmsService.getRealmslist().subscribe(answer => {
      this.realms = answer.realms;
    });
  }
  getGuild() {
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['/guildsummary', this.realm, this.guild]);
  }
}
