import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../models/Employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'victim musundire',
      gender: 'male',
      email: 'mvpvictim@gmail.com',
      phoneNumber: 263776866577,
      contactPreference: 'email',
      dateOfBirth: new Date('22/07/1994'),
      department: 'Software Engineering',
      inActive: true,
      photoPath: 'assets/images/galaxy.jpg'
    },
    {
      id: 2,
      name: 'victim musundire',
      gender: 'male',
      email: 'mvpvictim@gmail.com',
      phoneNumber: 263776866577,
      contactPreference: 'email',
      dateOfBirth: new Date('22/07/1994' ),
      department: 'Software Engineering',
      inActive: true,
      photoPath: 'assets/images/eclipse.jpg'
    },
    {
      id: 3,
      name: 'victim musundire',
      gender: 'male',
      email: 'mvpvictim@gmail.com',
      phoneNumber: 263776866577,
      contactPreference: 'email',
      dateOfBirth: new Date('22/07/1994'),
      department: 'Software Engineering',
      inActive: true,
      photoPath: 'assets/images/earthh.jpg'
    },
    {
      id: 4,
      name: 'victim musundire',
      gender: 'male',
      email: 'mvpvictim@gmail.com',
      phoneNumber: 263776866577,
      contactPreference: 'email',
      dateOfBirth: new Date('22/07/1994'),
      department: 'Software Engineering',
      inActive: true,
      photoPath: 'assets/images/astronomy.jpg'
    },
    {
      id: 5,
      name: 'victim musundire',
      gender: 'male',
      email: 'mvpvictim@gmail.com',
      phoneNumber: 263776866577,
      contactPreference: 'email',
      dateOfBirth: new Date('22/07/1994'),
      department: 'Software Engineering',
      inActive: true,
      photoPath: 'assets/images/astronomy.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
