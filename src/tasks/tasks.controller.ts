import {
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { TasksService, Task } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() task: Task): Task {
    return this.tasksService.createTask(task);
  }

  @Get('/done')
  getDoneTasks(): Task[] {
    return this.tasksService.getDoneTasks();
  }

  @Get('/pending')
  getPendingTasks(): Task[] {
    return this.tasksService.getPendingTasks();
  }

  @Delete('/deleteAll')
  deleteAllTasks(): string {
    return this.tasksService.deleteAllTasks();
  }

  @Delete('/:id')
  deleteTask(id: string): string {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id')
  updateTask(@Param() id: string, @Body() task: Task): Task | string {
    return this.tasksService.updateTask(task);
  }
}
