import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer.Component.TsComponent } from './footer.component.ts.component';

describe('Footer.Component.TsComponent', () => {
  let component: Footer.Component.TsComponent;
  let fixture: ComponentFixture<Footer.Component.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footer.Component.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
