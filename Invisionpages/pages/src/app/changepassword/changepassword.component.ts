import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent implements OnInit {
  // fetch:any
  // enter="";
  // reenter="";
  name: any;
  password: any;
  users: any;
  constructor(
    private service: ServicesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  changepassword = this.fb.group({
    enter: [''],
    reenter: [''],
  });

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name); //CHANGE PASSWORD WRT TO LOGIN CREDENTIAL
    // this.service.getUser().subscribe(data=>
    this.getUser();
  }

  updatePassword() {
    // JSON.parse (localStorage.getItem('name')
    if (
      this.changepassword.get('enter')?.value == null ||
      this.changepassword.get('reenter')?.value == null
    ) {
      alert('please set new password');
    } else if (
      this.changepassword.get('enter')?.value !==
      this.changepassword.get('reenter')?.value
    ) {
      alert('Passwords do not match, please Re enter');
    } else {
      for (let user of this.users) {
        if (this.name === user.name) {
          const newPassword = {
            password: this.changepassword.get('enter')?.value,
            name: user.name,
          };
          this.service.putUser(newPassword, user.id).subscribe((data) => {
            localStorage.removeItem('name');
            this.router.navigateByUrl('/login');
          });
        }
      }
    }
  }
  getUser() {
    this.service.getUser().subscribe((data) => (this.users = data));
  }
}
