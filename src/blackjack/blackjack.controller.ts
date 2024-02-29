import { Controller, Get} from '@nestjs/common';
import { BlackjackService } from './blackjack.service';

@Controller('blackjack')
export class BlackjackController {
    constructor(private readonly deckService: BlackjackService) {}

    @Get('deal')
    dealCard() {
        const card = this.deckService.dealCard();
        return { card };
    }

    @Get('remaining')
    getRemainingCardsCount() {
        const count = this.deckService.getRemainingCardsOnDeck();
        return { remainingCards: count };
    }
}