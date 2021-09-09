import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-intership',
  templateUrl: './intership.component.html',
  styleUrls: ['./intership.component.css']
})
export class IntershipComponent implements OnInit {

  progressInfos: any[];
  

  constructor(private _myFB : FormBuilder,private servic:CompanyService) { }

  get Username(){
    return this.registrationForm.get('companyname')
  }
  registrationForm= this._myFB.group({
    companyname: ['',Validators.required],
    intername: [''],
    interneed: [''],
    internlogo: [''],
    projectdata :this._myFB.group({
      url: [''],
      location: ['']
    })
  });
  ngOnInit(){
    this.getcomapnydata();
  }
  getcomapnydata(){
     this.servic.getdata()
     .subscribe((data:any) => [
       console.log(data)
     ])
  }

  selectedValues(){
    this.registrationForm.patchValue({  //instead of setValue we can use patchValue
      companyname: 'solar',
      intername:'',
      interneed:'',
      internlogo: '',
      projectdata: {
        url: 'warangal',
        location: 'Telangana'
    }
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


  intership:boolean=false;

  isintern1(){
    this.intership=true;
  }

  isintern2(){
    this.intership=false;
  }

  topicHasError = true;

  public companydata =['.net','html','css','angular'];

  validateTopic(value){
    if (value === 'default'){
      this.topicHasError =true;
    }else{
     this.topicHasError =false;
    }
   }

   get f(){
    return this.registrationForm.controls;
  }

  
  
}
