import { CharacterCard } from '../Models/CharacterCard';
import { AlignmentType } from '../Enums/AlignmentType';
import { CharacterType } from '../Enums/CharacterType';

export const CharactersDB: Array<CharacterCard> = new Array<CharacterCard>({
        // EVIL Characters :
        Id : 1,
        Name : 'Mordred',
        ImageUrl : '/images/characters/evil/Mordred.png',
        Alignment : AlignmentType.Evil,
        Description : 'Unknown to Merlin',
        Type : CharacterType.Mordred,
        AdditionalInfo : ''
    }, {
        Id : 2,
        Name : 'Assassin',
        ImageUrl : '/images/characters/evil/Assassin.png',
        Alignment : AlignmentType.Evil,
        Description : 'Minion of Mordred',
        Type : CharacterType.Assassin,
        AdditionalInfo : ''
    }, {
        Id : 3,
        Name : 'Lancelot',
        ImageUrl : '/images/characters/evil/Lancelot.png',
        Alignment : AlignmentType.Evil,
        Description : 'Minion of Mordred',
        Type : CharacterType.LancelotEvil,
        AdditionalInfo : ''
    }, {
        Id : 7,
        Name : 'Morgana',
        ImageUrl : '/images/characters/evil/Morgana.png',
        Alignment : AlignmentType.Evil,
        Description : 'Appears as Merlin',
        Type : CharacterType.Morgana,
        AdditionalInfo : ''
    }, {
        Id : 8,
        Name : 'Oberon',
        ImageUrl : '/images/characters/evil/Oberon.png',
        Alignment : AlignmentType.Evil,
        Description : 'Unknown to Evil',
        Type : CharacterType.Oberon,
        AdditionalInfo : ''
    }, {
        // GOOD Characters :
        Id : 9,
        Name : 'Merlin',
        ImageUrl : '/images/characters/good/Merlin.png',
        Alignment : AlignmentType.Good,
        Description : 'Knows evil, must remain hidden',
        Type : CharacterType.Merlin,
        AdditionalInfo : ''
    }, {
        Id : 10,
        Name : 'Lancelot',
        ImageUrl : '/images/characters/good/Lancelot.png',
        Alignment : AlignmentType.Good,
        Description : 'Loyal servant of Arthur',
        Type : CharacterType.LancelotGood,
        AdditionalInfo : ''
    }, {
        Id : 16,
        Name : 'Percival',
        ImageUrl : '/images/characters/good/Percival.png',
        Alignment : AlignmentType.Good,
        Description : 'Loyal servant of Arthur',
        Type : CharacterType.Percival,
        AdditionalInfo : ''
    });
