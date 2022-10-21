import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


const MaterialComponent =[
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule

]


@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]

})
export class MaterialModule { }
