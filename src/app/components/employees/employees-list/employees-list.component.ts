import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee-model';
import { EmployeesService } from '../../../services/employees.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {
employees: Employee[]=[];

constructor(private employeesService: EmployeesService) {}

ngOnInit() {
  this.employeesService.getAllEmployees().subscribe({
    next: (employees) => {
      this.employees = employees;
    },
    error: (response) => {
      console.log(response);
    }
  });
  }
}
