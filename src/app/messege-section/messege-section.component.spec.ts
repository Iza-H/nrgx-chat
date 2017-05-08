import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegeSectionComponent } from './messege-section.component';

describe('MessegeSectionComponent', () => {
  let component: MessegeSectionComponent;
  let fixture: ComponentFixture<MessegeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessegeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
