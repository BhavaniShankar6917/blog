import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedNavComponent } from './embed-nav.component';

describe('EmbedNavComponent', () => {
  let component: EmbedNavComponent;
  let fixture: ComponentFixture<EmbedNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmbedNavComponent]
    });
    fixture = TestBed.createComponent(EmbedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
