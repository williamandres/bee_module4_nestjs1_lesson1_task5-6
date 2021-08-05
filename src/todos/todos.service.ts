import { Injectable } from '@nestjs/common';


@Injectable()
export class TodosService {
    getalltodos(){
        return[
            {
            id: 1,
                name: 'tarea1',
            },
            {
                id: 2,
                name: 'tarea2',
            }
        ]
    }
    
    getTodo( id:string){
        return{
            id,
            name:`tarea ${id}`,
            
        }
    }
}
