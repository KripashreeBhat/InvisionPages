import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  checked =false;
  constructor() { }

  ngOnInit(): void {
  }
 thankyou(){
  this.checked=true;
 }
 nothankyou(){
  this.checked=false;
 }
}
