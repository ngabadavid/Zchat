import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn()
  message_id: number;
  @Column()
  message_sender: string;
  @Column({ default: '' })
  message_text: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  message_send_datetime: Date;
}
