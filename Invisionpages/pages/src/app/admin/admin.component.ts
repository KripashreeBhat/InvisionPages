import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import * as crypt from 'crypto-js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  addadmin!: FormGroup;
  addadminarray!: FormArray;
  empDetail: any;
  display = true;
  key: any;
  encrypt: any;
  decrypt: any;
  name!: any;
  code: any;
  mail: any;
  log = false;

  constructor(
    private fb: FormBuilder,
    private service: ServicesService,
    private route: Router
  ) {}

  get form() {
    return this.addadmin.get;
  }
  ngOnInit(): void {
    this.addadmin = this.fb.group({
      name: [''],
      code: [''],
      mail: [''],
    });
    this.getAllEmpDetail();
  }

  encryptt(data: any) {
    if (data != null) {
      return crypt.AES.encrypt(data, 'hello').toString();
    } else {
      return null;
    }
  }
  decryptt(msg: any) {
    return crypt.AES.decrypt(msg, 'hello').toString(crypt.enc.Utf8);
    console.log(this.decrypt);
  }

  // post
  addAdmin() {
    const superAdmin = {
      name: this.addadmin.get('name')?.value,
      empcode: this.addadmin.get('code')?.value,
      email: this.addadmin.get('mail')?.value,
    };
    this.service.postadmin(superAdmin).subscribe(
      (data) => {
        alert('successfully added');
        this.addadmin.reset();
        this.getAllEmpDetail();

      },
      (err) => {
        alert('Something went wrong, try again!');
      }
    );
  }

  edit(detail: any) {
    this.display = false; //removing + button
    this.empDetail.id = detail.id;
    this.addadmin.controls['name'].setValue(detail.name);
    this.addadmin.controls['code'].setValue(detail.empcode);
    this.addadmin.controls['mail'].setValue(detail.email);
  }

  // put updated information
  updateAdmin() {
    this.display = true;
    const updateAdmin = {
      name: this.addadmin.get('name')?.value,
      empcode: this.addadmin.get('code')?.value,
      email: this.addadmin.get('mail')?.value,
    };
    this.service.putAdmin(updateAdmin, this.empDetail.id).subscribe(
      (data) => {
        this.addadmin.reset();
        alert('successfully updated!!');
        this.getAllEmpDetail();
      },
      (err) => {
        alert('Something went wrong, try again!');
      }
    );
  }

  // delete
  deleteAdmin(detail: any) {
    this.service.deleteAdmin(detail.id).subscribe(
      (data) => {
        alert('Are you sure ?');
        this.getAllEmpDetail();
      },
      (err) => {
        alert('Something went wrong, try again!');
      }
    );
  }

  // get
  getAllEmpDetail() {
    this.service.getAdmin().subscribe(
      (data) => {
        this.empDetail = data;
      },
      (err) => {
        alert('Something went wrong, try again!');
      }
    );
  }
}
