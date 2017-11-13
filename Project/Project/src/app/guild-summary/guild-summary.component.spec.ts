import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildSummaryComponent } from './guild-summary.component';

describe('GuildSummaryComponent', () => {
  let component: GuildSummaryComponent;
  let fixture: ComponentFixture<GuildSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
