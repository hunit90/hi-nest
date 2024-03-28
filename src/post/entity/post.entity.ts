import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Post extends CommonEntity {
  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'timestamp' })
  endDate!: Date;

  @Column('simple-array')
  ages!: string[];

  @Column({ type: 'varchar', length: 255 })
  researchType!: string;

  @Column({ type: 'varchar', length: 255 })
  url!: string;

  @Column({ type: 'text' })
  procedure!: string;

  @Column({ type: 'varchar', length: 255 })
  duration!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'int', default: 0 })
  viewCount!: number;
}
