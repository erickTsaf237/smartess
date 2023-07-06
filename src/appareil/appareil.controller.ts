import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AppareilService} from "./appareil.service";
import {Appareil} from "./model/appareil.model";

@Controller('appareil')
export class AppareilController {
    constructor(private appareilService: AppareilService) {
    }
    @Post()
    create(@Body() newOpject: Appareil){
        return this.appareilService.create(newOpject);
    }
    @Put('/source/:id')
    updateRource(@Body() updatedOpject: any, @Param('id') id:string){
        return this.appareilService.update(updatedOpject, id);
    }
    @Put('/:id')
    update(@Body() updatedOpject: any, @Param('id') id:string){
        return this.appareilService.update(updatedOpject, id);
    }
    @Get('/:id')
    getOneById(@Param('id') id:string){
        return this.appareilService.getOneByPId(id);
    }
    @Get()
    getAll(){
        return this.appareilService.getAll();
    }
    @Delete('/:id')
    deleteById(@Param('id') id:string){
        return this.appareilService.deleteByPId(id);
    }
}
