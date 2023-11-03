import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosDatosComponent } from './nuevos-datos.component';

describe('NuevosDatosComponent', () => {
  let component: NuevosDatosComponent;
  let fixture: ComponentFixture<NuevosDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevosDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
