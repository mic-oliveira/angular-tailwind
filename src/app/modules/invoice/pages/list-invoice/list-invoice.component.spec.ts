// tslint:disable:ordered-imports
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListInvoiceComponent} from './list-invoice.component';
import {RouterTestingModule} from "@angular/router/testing";
import {InvoiceService} from "../../../../services/api/invoice.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import 'zone.js/dist/zone-testing.js'

describe('ListInvoiceComponent', () => {
  let component: ListInvoiceComponent;
  let fixture: ComponentFixture<ListInvoiceComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ListInvoiceComponent],
      providers: [
        {provide: 'InvoiceService', useClass: InvoiceService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(ListInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
