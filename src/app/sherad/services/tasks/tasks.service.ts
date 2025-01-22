import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getAll(): Observable<Task[]> {
    return of([ 
      { title: 'Item 1', completed: false },
      { title: 'Item 2', completed: false },
      { title: 'Item 3', completed: false },
      { title: 'Item 4', completed: false },
      { title: 'Item 5', completed: false },
      { title: 'Item 6', completed: true },
      { title: 'Item 7', completed: true },
      { title: 'Item 8', completed: true },
      { title: 'Item 9', completed: true },
      { title: 'Item 10', completed:true },
    ]);
  }
}
