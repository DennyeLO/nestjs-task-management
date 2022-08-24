import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { updateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskStatus } from './tasks-status-enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {

    }

    // @Get()
    // getTasks(
    //     @Query() filterDto: GetTaskFilterDto
    // ): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getTaskWithFilter(filterDto);
    //     } else {
    //         return this.tasksService.getAllTasks();
    //     }
    // }

    // @Post()
    // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto)
    // }

    // @Get('/:id')
    // getDetailTask(
    //     @Param('id') id: string
    // ): Task {
    //     return this.tasksService.getTaskById(id)
    // }

    // @Delete('/:id')
    // deleteTaskById(
    //     @Param('id') id: string
    // ): void {
    //     return this.tasksService.deleteTaskById(id)
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body() updateTaskStatusDto: updateTaskStatusDto
    // ) {
    //     const {status} = updateTaskStatusDto;
    //     return this.tasksService.updateTaskStatus(id, status);
    // }
}
