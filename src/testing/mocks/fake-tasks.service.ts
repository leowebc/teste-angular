import { HttpClient } from '@angular/common/http';
import { TasksService } from 'src/app/sherad/services/tasks/tasks.service';                              
export class FakeTasksService implements TasksService {
  httpClient!: HttpClient;
  getAll = jest.fn();
  patch = jest.fn();
  delete = jest.fn();
  post = jest.fn();
}
