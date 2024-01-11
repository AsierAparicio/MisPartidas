import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPartidaPage } from './new-partida.page';

describe('NewPartidaPage', () => {
  let component: NewPartidaPage;
  let fixture: ComponentFixture<NewPartidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
