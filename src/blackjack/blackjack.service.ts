import { Injectable } from '@nestjs/common';

class Card {
    constructor(public value: string, public suit: string) {}
}

@Injectable()
export class BlackjackService {
    private cards: Card[]

    constructor() {
        this.cards = this.generateDeck();
        this.shuffle();
    }

    private generateDeck(): Card[] {
        const suits = ["Hearts", "Spades", "Clubs", "Diamonds" ]
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        
        const deck: Card[] = [] 
        
        for (let i = 0; i < 6; i++) { 
            for (const suit of suits) {
                for (const value of values) {
                    deck.push(new Card(value, suit));
                }
            }
        }

        return deck 
    }

    private shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealCard(): Card {
        return this.cards.pop()!;
    }

    getRemainingCardsOnDeck(): number {
        return this.cards.length;
    }


}
