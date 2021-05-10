import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { CustomComponent } from './custom.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    CustomRoutingModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()]
   
})
export class CustomModule { }
