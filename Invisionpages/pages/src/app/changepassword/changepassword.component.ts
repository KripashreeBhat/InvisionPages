import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  
  // enter="";
  // reenter="";
  constructor(private service:ServicesService,
     private fb:FormBuilder,
     private router :Router,) { }

  changepassword =this.fb.group({
    enter :[""],
    reenter:[""]
  });

  ngOnInit(): void {
  }

 updatePassword(){
  if(this.changepassword.get('enter')?.value == null || this.changepassword.get('reenter')?.value==null){
    alert('please set new password');
  }
  else if(this.changepassword.get('enter')?.value !== this.changepassword.get('reenter')?.value){
    alert('Passwords do not match, please Re enter');
  }
 else {
  this.service.getUser().subscribe(data=>{
    const newPassword = { password:this.changepassword.get('enter')?.value, name:data[0].name};
    this.service.putUser(newPassword).subscribe(data=>{
      this.router.navigateByUrl('/login');
    })

  })

  }
  }
 }

