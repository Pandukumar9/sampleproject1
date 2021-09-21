import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirmpasswordvalidator';


@Component({
  selector: 'app-reativeforming',
  templateUrl: './reativeforming.component.html',
  styleUrls: ['./reativeforming.component.css']
})
export class ReativeformingComponent implements OnInit {

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
  registrationForm= this._myFB.group(
    {
    username: ['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ["",Validators.required],
    
    address :this._myFB.group({
      city: [''],
      state: ['']
    },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    )
  });
  ngOnInit(): void {
  }
  selectedValues(){
    this.registrationForm.patchValue({  //instead of setValue we can use patchValue
      username: 'Pandkumar',  
      address: {
        city: 'warangal',
        state: 'Telangana'
    }
  })
  }
  submitted: boolean = true;
  onSubmited(registrationForm){
    console.log(registrationForm);
    this.submitted=true;
  }

}
