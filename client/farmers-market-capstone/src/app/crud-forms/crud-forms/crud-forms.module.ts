import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudFormsComponent } from './crud-forms.component';

@NgModule({
  declarations: [CrudFormsComponent],
  imports: [CommonModule],
  exports: [CrudFormsComponent],
})
export class CrudFormsModule {}
