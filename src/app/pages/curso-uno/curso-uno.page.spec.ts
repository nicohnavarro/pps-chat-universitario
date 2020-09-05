import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoUnoPage } from './curso-uno.page';

describe('CursoUnoPage', () => {
  let component: CursoUnoPage;
  let fixture: ComponentFixture<CursoUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
