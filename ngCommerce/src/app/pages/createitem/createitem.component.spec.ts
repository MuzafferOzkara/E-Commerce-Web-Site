import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepageitemComponent } from './createitem.component';

describe('CreateitemComponent', () => {
  let component: CreatepageitemComponent;
  let fixture: ComponentFixture<CreatepageitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepageitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepageitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
