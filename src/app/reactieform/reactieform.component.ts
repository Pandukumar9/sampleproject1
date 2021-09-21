import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactieform',
  templateUrl: './reactieform.component.html',
  styleUrls: ['./reactieform.component.css']
})
export class ReactieformComponent implements OnInit {

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
    address :this._myFB.group({
      city: [''],
      state: ['']
    })
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

  onSubmited(registrationForm){
    console.log(registrationForm);
  }

}
