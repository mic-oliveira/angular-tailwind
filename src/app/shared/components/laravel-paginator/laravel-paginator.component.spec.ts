import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelPaginatorComponent } from './laravel-paginator.component';

describe('LaravelPaginatorComponent', () => {
  let component: LaravelPaginatorComponent;
  let fixture: ComponentFixture<LaravelPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaravelPaginatorComponent]
    });
    fixture = TestBed.createComponent(LaravelPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
