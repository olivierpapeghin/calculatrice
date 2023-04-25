import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Echec } from './echec.entity';

@Injectable()
export class EchecService {
    constructor(
        @InjectRepository(Echec)
        private echecRepository: Repository<Echec> // Le répertoire des échecs
    ){}

    async createEchec(): Promise<Echec> {
        // On va enregistrer un échec dans la DB
        console.log("Sauvegarde d'un échec dans la DB");
        const echec = new Echec();
        console.log(echec) // On l'affiche pour s'assurer qu'on a bien ce que l'on veut
        await echec.save();
        return echec;
    }

    async dernierEchec(){
        // On va chercher le dernier échec en date dans la DB
        console.log("Recherche du dernier échec en date dans la DB");
        const reponse = await this.echecRepository.find();
        // Comme on ajoute les échecs par ordre chronologique le dernier est le plus récent
        // Donc on cherche le dernier élément de la liste
        console.log(reponse[reponse.length-1]);
        // On renvoie le dernier échec et le nombre total d'échecs
        return [reponse[reponse.length-1],reponse.length]; 
    }
}
