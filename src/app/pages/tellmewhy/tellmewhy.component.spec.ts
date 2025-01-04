import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellmewhyComponent } from './tellmewhy.component';

describe('TellmewhyComponent', () => {
  let component: TellmewhyComponent;
  let fixture: ComponentFixture<TellmewhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TellmewhyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TellmewhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
