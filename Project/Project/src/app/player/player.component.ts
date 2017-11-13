import { Component, OnInit } from '@angular/core';
import { RealmsService } from '../realms.service';
import { Realms } from '../realms';
import { PlayerService} from '../player.service';
import { Player } from '../player';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: string;
  realm: string;
  realms: Realms[] = [];
  constructor(private realmsService: RealmsService, private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.realmsService.getRealmslist().subscribe(realms => {
      this.realms = realms;
    });
  }
  getPlayer() {
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['/playersummary', this.realm, this.player]);
  }
}
