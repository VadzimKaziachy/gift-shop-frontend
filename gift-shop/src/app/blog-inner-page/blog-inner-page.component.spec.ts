import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInnerPageComponent } from './blog-inner-page.component';

describe('BlogInnerPageComponent', () => {
  let component: BlogInnerPageComponent;
  let fixture: ComponentFixture<BlogInnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogInnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
