import { Controller,Post,Body } from '@nestjs/common';
import { SuccesService } from './succes.service';
import { Succes } from './succes.entity';

@Controller('Succes')
export class SuccesController {
    constructor(private succesService:SuccesService ){}

    @Post() // On a reçu une requête POST à localhost:3000/Succes
    handleSucces(@Body('timeTakenMs') timeTakenMs: number):Promise<[number,number]>{
        console.log("POST reçu pour un succès !");
        // On sauvegarde le succès dans un premier temps
        this.succesService.createSucces(timeTakenMs);
        console.log("Succès sauvegardé");
        // Ensuite on renvoie le rapport global
        return this.succesService.reponseSucces(timeTakenMs);
    }
}
