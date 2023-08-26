import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHighlightComponent } from './post-highlight.component';

describe('PostHighlightComponent', () => {
  let component: PostHighlightComponent;
  let fixture: ComponentFixture<PostHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
