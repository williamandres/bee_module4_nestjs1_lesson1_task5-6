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
            }
        ]
    }

    @Get('/PUT')
    putnest(){
        return[
            {
                nombre: 'put',
            }
        ]
    }

    @Get('/DELETE')
    deleteNest(){
        return[
            {
                nombre: 'delete',
            }
        ]
    }


}
