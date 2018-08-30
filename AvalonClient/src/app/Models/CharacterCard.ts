import { AlignmentType } from '../Enums/AlignmentType';
import { CharacterType } from '../Enums/CharacterType';

export class CharacterCard {
    Id: number = 0;
    Name: string = '';
    ImageUrl: string = '';
    Alignment: AlignmentType;
    Description: string = '';
    Type: CharacterType;
    AdditionalInfo: string = '';
}
