import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  quesionnaire! : FormGroup;
  // additional! : FormGroup;
  constructor(private fb : FormBuilder) { }
 get form(){
  return this.quesionnaire.get;
 }
  ngOnInit(): void {
    this.quesionnaire = this.fb.group({
      userTitle : [''],
      description : [''],
      btntitle: [''],
      btntext:[''],
      checkbox:[''],
      startDate:[''],
      endDate:[''],
      reminder:[''],
      file:[''],
      sheet:[''],
      mail:['']
    });

    // let additional = this.fb.group({
    //   startDate:[''],
    //   endDate:[''],
    //   reminder:[''],
    //   file:[''],
    //   sheet:[''],
    //   mail:['']
    // })
  }

}
