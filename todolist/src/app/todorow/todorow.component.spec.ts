import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodorowComponent } from './todorow.component';

describe('TodorowComponent', () => {
  let component: TodorowComponent;
  let fixture: ComponentFixture<TodorowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodorowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
