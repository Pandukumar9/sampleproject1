import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {


  employee : Employee = new Employee();
  constructor(private empService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.empService.createEmployee(this.employee)
    .subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
      this.employee = new Employee();
      alert("Successfully Submited.");
      
    })
  }

  goToEmployeeList(){
    this.router.navigate(['employees'])
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
