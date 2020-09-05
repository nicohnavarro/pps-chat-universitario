import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoDosPage } from './curso-dos.page';

describe('CursoDosPage', () => {
  let component: CursoDosPage;
  let fixture: ComponentFixture<CursoDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
