import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup} from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addadmin!:FormGroup;
  constructor(private fb: FormBuilder, private service: ServicesService) { }
  get form(){
    return this.addadmin.get
  }
  ngOnInit(): void {
    this.addadmin = this.fb.group({
      name :[''],
      code: [''],
      mail:[''],

      namefill1:['Kevin'],
      namefill2:['John'],
      code1:['RT12345'],
      code2:['RT23456'],
      mail1:['kevin@robosoftin.com'],
      mail2:['john@robosoftin.com']

    })
  }
  addAdmin(){
    const superAdmin = { name: this.addadmin.get('name')?.value, empcode: this.addadmin.get('code')?.value, email: this.addadmin.get('mail')?.value}
    this.service.postadmin(superAdmin).subscribe();

}
}
