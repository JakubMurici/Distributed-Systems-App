import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtListComponent } from './yacht-list.component';

describe('YachtListComponent', () => {
  let component: YachtListComponent;
  let fixture: ComponentFixture<YachtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YachtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
