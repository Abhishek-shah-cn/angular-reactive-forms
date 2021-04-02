import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  newEmployeeClicked = false;

  employees = [
    { name: 'abhi', Email: 'check1@yahoo.com', address: 'Gurgaon' },
    { name: 'aman', Email: 'test@gmail.com', address: 'Gurgaon' },
    { name: 'test', Email: 'azy@gmail.com', address: 'Gurgaon' },
  ];

  color: any;

  constructor() {}

  ngOnInit() {}

  model: any = {};
  model2: any = {};

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i: number) {
    this.employees.splice(i);
    console.log(i);
  }

  myValue: any;

  editEmployee(editEmployeeInfo: any) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.Email = this.employees[editEmployeeInfo].Email;
    this.model2.address = this.employees[editEmployeeInfo].address;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

  changeColorOne() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
      return '#f6f6f6';
    }
  }
}
