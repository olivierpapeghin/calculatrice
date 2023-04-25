import{BaseEntity,PrimaryGeneratedColumn,Column,Entity} from 'typeorm';

@Entity('Succes')
export class Succes extends BaseEntity {
    @PrimaryGeneratedColumn()
   id: number;
    @Column()
   timeTakenMs: number;
}