import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChannelsComponent } from './post-channels.component';

describe('PostChannelsComponent', () => {
  let component: PostChannelsComponent;
  let fixture: ComponentFixture<PostChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
