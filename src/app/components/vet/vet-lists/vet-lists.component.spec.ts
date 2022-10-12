import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetListsComponent } from './vet-lists.component';

describe('VetListsComponent', () => {
  let component: VetListsComponent;
  let fixture: ComponentFixture<VetListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
