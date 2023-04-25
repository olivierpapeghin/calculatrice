import{BaseEntity,PrimaryGeneratedColumn,CreateDateColumn,Entity} from 'typeorm';

@Entity('Echec')
export class Echec extends BaseEntity {
    @PrimaryGeneratedColumn()
   id: number;
    @CreateDateColumn()
   created_at: Date;
}