import { ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() =>
    cy
      .mount(AppComponent, {
        imports: [RouterTestingModule],
      })
      .then((appComponent) => {
        fixture = appComponent.fixture;
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  );

  it('should create the app', () => {
    expect(!!component).to.be.true;
  });

  it(`should have 'angular-16-boilerplate' as title`, () => {
    const appTitle = component.title;
    expect(appTitle).to.equal('angular-16-boilerplate');
  });
});
