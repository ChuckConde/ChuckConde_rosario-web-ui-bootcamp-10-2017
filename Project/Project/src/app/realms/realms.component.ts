import { Component, OnInit } from '@angular/core';
import { RealmsService } from '../realms.service';
import { Realms } from '../realms';
@Component({
  selector: 'app-realms',
  templateUrl: './realms.component.html',
  styleUrls: ['./realms.component.scss']
})
export class RealmsComponent implements OnInit {
  realms: Realms[] = [];
  constructor( private realmsService: RealmsService) { }

  ngOnInit() {
    this.realmsService.getRealmslist().subscribe(answer => {
      this.realms = answer.realms;
    });
  }

}
