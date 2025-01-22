import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('getAll() deve retornar uma lista de tarefas', fakeAsync(() => {

    let result: any = null
    
    service.getAll().subscribe(tasks => {
      result = tasks;

    })

    tick();

    expect(result).toEqual([
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

  }));
});
