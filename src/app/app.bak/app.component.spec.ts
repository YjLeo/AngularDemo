import { TestBed } from '@angular/core/testing';
import { IndexComponent } from './app.component';

describe('IndexComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled1'`, () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('untitled1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('untitled1 app is running!');
  });
});
