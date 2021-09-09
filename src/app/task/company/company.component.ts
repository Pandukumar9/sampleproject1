import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  progressInfos: any[];
  

  constructor(private _myFB : FormBuilder) { }

  get Username(){
    return this.registrationForm.get('companyname')
  }
  registrationForm= this._myFB.group({
    companyname: ['',Validators.required],
    password: [''],
    companylogo: [''],
      city: [''],
      state: ['']
  });
  ngOnInit(): void {
  }
  selectedValues(){
    this.registrationForm.patchValue({  //instead of setValue we can use patchValue
      companyname: 'sunssolar',
      companylogo: '',
        city: 'warangal',
        state: 'Telangana'
  })
  }

  onSubmited(registrationForm){
    console.log(registrationForm);
  }
  
  selectedFiles?: FileList;
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;
  finaldata:any;

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

       this.finaldata =  reader.readAsDataURL(this.selectedFiles[i]);
       console.log(this.finaldata);
      }
    }
  }

}
