import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRegistroComponent } from './shop-registro.component';

describe('ShopRegistroComponent', () => {
  let component: ShopRegistroComponent;
  let fixture: ComponentFixture<ShopRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
