import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task{
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {

 tasks = signal<Task[]>([
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
])

  completedTasks = computed(() => 
    this.tasks().filter(task => task.completed)
  )

  pendingTasks = computed(() => 
    this.tasks().filter(task => !task.completed)
  )

}