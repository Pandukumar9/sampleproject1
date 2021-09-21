import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reativeforming',
  templateUrl: './reativeforming.component.html',
  styleUrls: ['./reativeforming.component.css']
})
export class ReativeformingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
  });

  onSubmited(registrationForm){
    console.log(registrationForm);
    alert(registrationForm)
  }

}
