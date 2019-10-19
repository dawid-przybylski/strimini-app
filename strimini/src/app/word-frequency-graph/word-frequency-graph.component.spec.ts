import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFrequencyGraphComponent } from './word-frequency-graph.component';

describe('WordFrequencyGraphComponent', () => {
  let component: WordFrequencyGraphComponent;
  let fixture: ComponentFixture<WordFrequencyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFrequencyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
