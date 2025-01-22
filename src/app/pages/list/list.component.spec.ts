import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { TasksService } from 'src/app/sherad/services/tasks/tasks.service';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/sherad/interfaces/task.interface';
import { title } from 'process';


class FakeTasksService implements TasksService{
  getAll = jest.fn();
}


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let tasksService: TasksService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        {
          provide: TasksService,
          useClass: FakeTasksService
        }
      ]
    });
    await TestBed.compileComponents();
    
    tasksService = TestBed.inject(TasksService);

   
  });

  it('deve listar as tarefas', () => {
    (tasksService.getAll as jest.Mock).mockReturnValue(of([
      { title: 'Tarefa 1', completed: false },
      { title: 'Tarefa 2', completed: false },
      { title: 'Tarefa 3', completed: false },
      { title: 'Tarefa 4', completed: false },
      { title: 'Tarefa 5', completed: false },
      { title: 'Tarefa 6', completed: true  },
      { title: 'Tarefa 7', completed: true  },
      { title: 'Tarefa 8', completed: true  },
      { title: 'Tarefa 9', completed: true  },
      { title: 'Tarefa 10', completed: true },
    ]));

    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();


    const todoSection = fixture.debugElement.query(By.css('[data-testid="todo-list"]'));
    
    expect(todoSection).toBeTruthy();

   const todoItems = todoSection.queryAll(By.css('[data-testid="todo-list-item"]'))

    expect(todoItems.length).toBe(5);



    //-------------------------------------------------

    const completedSection = fixture.debugElement.query(By.css('[data-testid="completed-list"]'));
    
    expect(completedSection).toBeTruthy();

   const completedeItems = completedSection.queryAll(By.css('[data-testid="completed-list-item"]'));

    expect(completedeItems.length).toBe(5);

    
  });
});
