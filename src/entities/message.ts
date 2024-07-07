import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('message')
export default class Message {
  @PrimaryGeneratedColumn({ type: "bigint", comment: "流水號" })
  id!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', comment: '創建時間' })
  createdAt!: Date;

  @Column({ type: "varchar", nullable: false, comment: '姓名', length: 20 })
  name!: string;

  @Column({ type: 'varchar', nullable: false, comment: '留言', length: 255 })
  message!: string;
}
