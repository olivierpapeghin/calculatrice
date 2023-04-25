import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Succes} from './succes.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SuccesService {
    constructor(@InjectRepository(Succes) private succesRepository: Repository<Succes>){}

    async createSucces(timeTakenMs: number): Promise<Succes> {
        // On enregistre le succes dans la DB
        console.log("Sauvegarde d'un succès dans la DB");
        const succes = new Succes();
        succes.timeTakenMs=timeTakenMs;
        console.log(succes);
        await succes.save();
        return succes;
    }

    async reponseSucces(tempsPris: number): Promise<[number,number]>{
        // On va chercher tous les succès et voir le pourcentage de succès plus rapide ainsi que la moyenne de temps
        console.log("On traite la requête succès")
        const reponse = await this.succesRepository.find();
        var moyenne=0;
        var succesRapide=0;
        // On parcourt le tableau succès par succès
        reponse.forEach(succes=>{
            moyenne+=succes.timeTakenMs;
            if (succes.timeTakenMs>tempsPris){
                succesRapide+=1;
            }
        })
        console.log([moyenne/reponse.length,succesRapide*100/reponse.length]);
        return [moyenne/reponse.length,succesRapide*100/reponse.length];
    }
}
