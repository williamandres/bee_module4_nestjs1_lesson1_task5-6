import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor( private todos: TodosService){

    }

    @Get('/all')
    getalltodos(){
        return this.todos.getalltodos();
        
    }

    @Get(':id')
    findTodo(@Param('id') id){
        return this.todos.getTodo(id);
    }
}
