import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SampleService } from 'src/app/services/sample.service';
import { User } from 'src/app/tdfforms/user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _myFB : FormBuilder) { }

  // registrationForm = new FormGroup({
  //   username: new FormControl('PANDU'),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // });
  get Username(){
    return this.registrationForm.get('username')
  }
  registrationForm= this._myFB.group({
    username: ['',Validators.required],
    password: [''],
    gender: [''],
      city: [''],
      state: ['']
  });
  ngOnInit() {

    this.registrationForm.controls.valechanges.markAllAsTouched()

  }
  selectedValues(){
    this.registrationForm.patchValue({  //instead of setValue we can use patchValue
      username: 'Pandkumar',
      gender: 'male',
        city: 'warangal',
        state: 'Telangana'
  })
  }

  onSubmited(registrationForm){
    console.log(registrationForm);
  }
  islocal:boolean=false;

}
