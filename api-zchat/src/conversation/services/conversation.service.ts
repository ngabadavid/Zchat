import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from '../models/message.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Message } from '../models/message.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class ConversationService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  createMessage(message: Message): Observable<Message> {
    return from(this.messageRepository.save(message));
  }

  findAllMessage(): Observable<Message[]> {
    return from(this.messageRepository.find());
  }

  /*findMessageById(message_id: number): Observable<Message>{
    return from(this.messageRepository.findOneBy
  }*/

  updateMessage(
    message_id: number,
    message: Message,
  ): Observable<UpdateResult> {
    return from(this.messageRepository.update(message_id, message));
  }

  deleteMessage(message_id: number): Observable<DeleteResult> {
    return from(this.messageRepository.delete(message_id));
  }
}
