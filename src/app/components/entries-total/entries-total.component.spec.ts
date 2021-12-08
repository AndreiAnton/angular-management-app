import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesTotalComponent } from './entries-total.component';

describe('EntriesTotalComponent', () => {
  let component: EntriesTotalComponent;
  let fixture: ComponentFixture<EntriesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
