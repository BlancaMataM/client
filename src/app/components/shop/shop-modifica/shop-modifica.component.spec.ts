import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopModificaComponent } from './shop-modifica.component';

describe('ShopModificaComponent', () => {
  let component: ShopModificaComponent;
  let fixture: ComponentFixture<ShopModificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopModificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
