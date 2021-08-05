import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { NestController } from './nest/nest.controller';

@Module({
  imports: [],
  controllers: [AppController, TodosController, NestController],
  providers: [AppService, TodosService],
})
export class AppModule {}
