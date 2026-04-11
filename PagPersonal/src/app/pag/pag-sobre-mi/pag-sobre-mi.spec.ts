import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSobreMi } from './pag-sobre-mi';

describe('PagSobreMi', () => {
  let component: PagSobreMi;
  let fixture: ComponentFixture<PagSobreMi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagSobreMi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagSobreMi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
