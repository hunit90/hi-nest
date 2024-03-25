import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class User extends CommonEntity {
  @Column()
  email!: string;

  @Column()
  nickname!: string;
}
