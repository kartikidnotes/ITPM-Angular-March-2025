import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService{
  
  // createDb() {
  //   return {
  //     employees: [
  //       { id: 1, name: 'Rahul', email: 'rahul@gmail.com', department: 'IT' },
  //       { id: 2, name: 'Priya', email: 'priya@gmail.com', department: 'HR' }
  //     ]
  //   };
  // }

  createDb() {
  return {
    employees: []
  };
}

  genId(employees: any[]): number {
    return employees.length > 0
      ? Math.max(...employees.map(e => e.id)) + 1
      : 1;
  }
}
