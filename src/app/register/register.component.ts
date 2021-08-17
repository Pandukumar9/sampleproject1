import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {passwordvalidator} from '../passwordvalidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // get mobilenumber(){
  //   return this.regsiterForm.get('mobilenumber')
  // }

   regsiterForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(5),]),
    lastname: new FormControl('',[Validators.required]),
    gmail: new FormControl('',[Validators.required]),
    mobilenumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern(/^[a-z]{0,10}$/)]),
    password: new FormControl('',[Validators.required]),
    confirmpassword: new FormControl('',[Validators.required])
  },{validators:passwordvalidator});

}
