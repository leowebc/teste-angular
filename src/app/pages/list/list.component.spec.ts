import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
  });

  it('deve listar as tarefas', () => {

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
