import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('nest')
export class NestController {

    @Get('/GET')
    getnest(){
        return[
            {
                nombre: 'get',
            }
        ]
    }

    @Get('/POST')
    postnest(){
        return[
            {
                nombre: 'post',
                respuesta: 201,

            }
        ]
    }

    @Get('/PUT')
    putnest(){
        return[
            {
                nombre: 'put',
                respuesta: 200,
            }
        ]
    }

    @Get('/DELETE')
    deleteNest(){
        return[
            {
                nombre: 'delete',
                'queryEjemploGet1': 1,
                'queryEjemploGet2': 2,
                'queryEjemploGet3': 3,
            }
        ]
    }


}
