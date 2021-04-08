import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsaveComponent } from './catsave.component';

describe('CatsaveComponent', () => {
  let component: CatsaveComponent;
  let fixture: ComponentFixture<CatsaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
