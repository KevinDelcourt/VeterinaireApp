import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncPipe } from './pipes/trunc.pipe';


@NgModule({
  declarations: [TruncPipe],
  exports: [
    TruncPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {  }
