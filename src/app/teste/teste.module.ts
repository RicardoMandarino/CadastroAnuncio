import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import {MatButtonToggleModule,MatButtonToggle} from '@angular/material/button-toggle';

const MaterialComponents = [
  MatButtonToggleModule
];

@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,NzButtonModule,RouterModule,NzFormModule,MatButtonToggleModule
    
  ],
  exports: [
    TesteComponent
  ]
})
export class TesteModule { }
