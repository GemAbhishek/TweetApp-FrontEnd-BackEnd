import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTweetComponent } from './view-all-tweet.component';

describe('ViewAllTweetComponent', () => {
  let component: ViewAllTweetComponent;
  let fixture: ComponentFixture<ViewAllTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
