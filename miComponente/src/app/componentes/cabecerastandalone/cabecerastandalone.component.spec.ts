import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabecerastandaloneComponent } from './cabecerastandalone.component';

describe('CabecerastandaloneComponent', () => {
  let component: CabecerastandaloneComponent;
  let fixture: ComponentFixture<CabecerastandaloneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecerastandaloneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabecerastandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
