import { Injectable } from '@nestjs/common';

export class Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id) as Task;
  }

  createTask(newTask: Task) {
    const task: Task = newTask;

    this.tasks.push(task);
    return task;
  }

  updateTask(updatedTask: Task) {
    const task = this.getTaskById(updatedTask.id);
    if (!task) {
      return 'No Task Found!';
    } else {
      task.title = updatedTask.title;
      task.description = updatedTask.description;
      task.done = updatedTask.done;
      return task;
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return 'Task Deleted!';
  }

  deleteAllTasks() {
    this.tasks = [];
    return 'All Tasks Deleted!';
  }

  getDoneTasks() {
    return this.tasks.filter((task) => task.done);
  }

  getPendingTasks() {
    return this.tasks.filter((task) => !task.done);
  }
}
