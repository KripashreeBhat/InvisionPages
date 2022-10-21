import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide=true;
  loginForm!: FormGroup;
  constructor(private fb : FormBuilder) { }
  get form(){
    return this.loginForm.get;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName : [''],
      password : ['']
    });

 }  
}

