import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { PermissionGuard } from '../permission.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // public hide=true;
  loginForm!: FormGroup;
  login=false;
  // encryptedMessage!: string;
  // decryptedMessage!: string;

  constructor(
    private fb: FormBuilder,
    private service: ServicesService,
    private router: Router
  ) {}
  // get form(){
  //   return this.loginForm.get;
  // }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
    });

   
    
  }

    
  successlogin() {
   
    console.log(this.service.isLogedIn());
    
    localStorage.setItem('name',JSON.stringify( this.loginForm.get('userName')?.value));
    localStorage.setItem('password',JSON.stringify( this.loginForm.get('password')?.value));
    this.service.getUser().subscribe((data) => {
      let len = data.length;
      for (let i = 0; i < len; i++) {
        if (
          this.loginForm.get('userName')?.value == data[i].name && 
          this.loginForm.get('password')?.value == data[i].password
        ){
          this.login=true;
          break;
        }
        
         
      }
      if(this.login){
        
        // this.service.isLogedIn();
        
        this.router.navigateByUrl('/profile');
      }
        
      else  {
          alert("incorrect credentials");
          
      }
    });
  }
}

       
