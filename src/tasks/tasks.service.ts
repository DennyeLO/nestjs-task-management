import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks-status-enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
    // private tasks: Task[] = [];

    // getAllTasks():  Task[]{
    //     return this.tasks;
    // }

    // getTaskWithFilter(filterDto: GetTaskFilterDto): Task[]{
    //     const {status, search} = filterDto;

    //     let tasks = this.tasks;

    //     if(status){
    //         tasks = tasks.filter((tasks) => tasks.status === status);
    //     }

    //     if(search){
    //         tasks = tasks.filter((list) => {
    //             if(list.title.toLocaleLowerCase().includes(search) || list.description.toLocaleLowerCase().includes(search)){
    //                 return true;
    //             }
    //             return false
    //         });
    //     }

    //     return tasks;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task{
    //     const { title, description } = createTaskDto;

    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     }

    //     this.tasks.push(task);
    //     return task
    // }

    // getTaskById(id: string): Task{
    //     const found = this.tasks.find(list => list.id === id);
        
    //     if(!found){
    //         throw new NotFoundException(`Task with id ${id} not found`);
    //     }
    //     return found;
    // }

    // deleteTaskById(id: string): void{
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(list => list.id !== found.id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus){
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
