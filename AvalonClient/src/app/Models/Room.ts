import { CharacterCard } from './CharacterCard';
import { Campaign } from './Campaign';

export class Room {
    name: string = '';
    NumberOfGood: number = 1;
    NumberOfEvil: number = 1;
    ExcaliburEnabled: boolean = false;
    LadyOfTheLakeEnabled: boolean = false;
    NumberOfPlayers: number = 0;
    SpecialCharacters: Array<CharacterCard> = [];
    Campaign: Campaign = new Campaign();
}
