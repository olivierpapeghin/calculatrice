import { Controller,Post,Body } from '@nestjs/common';
import {Echec} from './echec.model';
import { EchecService } from './echec.service';

@Controller('Echec')
export class EchecController {
  constructor(private echecService: EchecService) {}

  @Post() // On a reçu un POST à localhost:3000/Echec, il faut donc créer un échec avec les infos de la requête
  HandleEchec():Promise<(number|Echec)[]>{
        console.log("POST reçu pour un échec !");
        // Dans un premier temps on crée un échec pour update la DB
        this.echecService.createEchec();
        console.log("Echec sauvegardé");
        // Ensuite il faut renvoyer le dernier échec en date et le nombre d'échecs à l'utilisateur
        return this.echecService.dernierEchec();
      }
}

