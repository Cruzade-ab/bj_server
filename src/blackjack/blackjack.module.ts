import { Module } from '@nestjs/common';
import { BlackjackService } from './blackjack.service';
import { BlackjackController } from './blackjack.controller';

@Module({
  controllers: [BlackjackController],
  providers: [BlackjackService],
})
export class BlackjackModule {}
