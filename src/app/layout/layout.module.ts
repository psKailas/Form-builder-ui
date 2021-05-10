import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
