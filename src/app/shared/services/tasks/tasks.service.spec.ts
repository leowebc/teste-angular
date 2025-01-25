import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TasksService } from './tasks.service';
import { Task } from '../../interfaces/task.interface';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { inject } from '@angular/core';

describe('TasksService', () => {
  let service: TasksService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
          provideHttpClient(),
          provideHttpClientTesting(),

      ]
    });
    service = TestBed.inject(TasksService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('getAll() deve retornar uma lista de tarefas', fakeAsync(() => {

    let result: Task[] | null = null;
    
    service.getAll().subscribe(tasks => {
      result = tasks;

    });

    const request = httpTestingController.expectOne('/api/tasks');

    const fakeTasks: Task[] = [
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
    ];


    request.flush(fakeTasks)
    tick();

    expect(result).toEqual(fakeTasks);

  }));
});
