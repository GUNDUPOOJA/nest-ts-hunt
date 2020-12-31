import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {  

    @PrimaryGeneratedColumn() 
    id: number;  

    @Column({ 
        type: 'varchar', 
        nullable: false, 
        unique: true 
    }) 
    email: string; 

    @Column({ 
        type: 'varchar', 
        nullable: false,
        select: false,
        length: 20 
    }) 
    password: string;  
   



    
  }
