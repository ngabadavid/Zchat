import { Module } from '@nestjs/common';
import { ConversationService } from './services/conversation.service';
import { ConversationController } from './controllers/conversation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './models/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [ConversationService],
  controllers: [ConversationController],
})
export class ConversationModule {}
