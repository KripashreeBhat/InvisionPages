import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  addadmin!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addadmin = this.fb.group({
      name :[''],
      code: [''],
      mail:[''],
      namefill1:['Rob'],
      namefill2:['Jane'],
      code1:['RT54321'],
      code2:['RT98765'],
      mail1:['rob@robosoftin.com'],
      mail2:['jane@robosoftin.com']

    })
  }


}
