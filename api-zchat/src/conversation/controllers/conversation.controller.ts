import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConversationService } from '../services/conversation.service';
import { Message } from '../models/message.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('conversation')
export class ConversationController {
  constructor(private conversationService: ConversationService) {}
  @Post()
  create(@Body() message: Message): Observable<Message> {
    return this.conversationService.createMessage(message);
  }

  @Get()
  findAll(): Observable<Message[]> {
    return this.conversationService.findAllMessage();
  }

  @Put(':message_id')
  update(
    @Param('message_id') message_id: number,
    @Body() message: Message,
  ): Observable<UpdateResult> {
    return this.conversationService.updateMessage(message_id, message);
  }

  @Delete(':message_id')
  delete(@Param('message_id') message_id: number) {
    return this.conversationService.deleteMessage(message_id);
  }
}
