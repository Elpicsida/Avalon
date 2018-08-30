var CharacterDatabase = (function() {
    var Characters = [{
        //EVIL Characters : 
        Id : 1,
        Name : 'Mordred',
        ImageUrl : '/images/characters/evil/Mordred.png',
        Alignment : 'Evil',
        Description : 'Unknown to Merlin',
        Type: 2
    },{
        Id : 2,
        Name : 'Assassin',
        ImageUrl : '/images/characters/evil/Assassin.png',
        Alignment : 'Evil',
        Description : 'Minion of Mordred',
        Type: 3
    },{
        Id : 3,
        Name : 'Lancelot',
        ImageUrl : '/images/characters/evil/Lancelot.png',
        Alignment : 'Evil',
        Description : 'Minion of Mordred',
        Type : 4
    },{
        Id : 4,
        Name : 'Minion #1',
        ImageUrl : '/images/characters/evil/Minion1.png',
        Alignment : 'Evil',
        Description : 'Minion of Mordred',
        Type : 0
    },{
        Id : 5,
        Name : 'Minion #2',
        ImageUrl : '/images/characters/evil/Minion2.png',
        Alignment : 'Evil',
        Description : 'Minion of Mordred',
        Type : 0
    },{
        Id : 6,
        Name : 'Minion #3',
        ImageUrl : '/images/characters/evil/Minion3.png',
        Alignment : 'Evil',
        Description : 'Minion of Mordred',
        Type : 0
    },{
        Id : 7,
        Name : 'Morgana',
        ImageUrl : '/images/characters/evil/Morgana.png',
        Alignment : 'Evil',
        Description : 'Appears as Merlin',
        Type : 5
    },{
        Id : 8,
        Name : 'Oberon',
        ImageUrl : '/images/characters/evil/Oberon.png',
        Alignment : 'Evil',
        Description : 'Unknown to Evil',
        Type : 6
    },{
        //GOOD Characters :
        Id : 9,
        Name : 'Merlin',
        ImageUrl : '/images/characters/good/Merlin.png',
        Alignment : 'Good',
        Description : 'Knows evil, must remain hidden',
        Type : 7
    },{
        Id : 10,
        Name : 'Lancelot',
        ImageUrl : '/images/characters/good/Lancelot.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 8
    },{
        Id : 11,
        Name : 'Minion #1',
        ImageUrl : '/images/characters/good/Minion1.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 1
    },{
        Id : 12,
        Name : 'Minion #2',
        ImageUrl : '/images/characters/good/Minion2.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 1
    },{
        Id : 13,
        Name : 'Minion #3',
        ImageUrl : '/images/characters/good/Minion3.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 1
    },{
        Id : 14,
        Name : 'Minion #4',
        ImageUrl : '/images/characters/good/Minion4.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 1
    },{
        Id : 15,
        Name : 'Minion #5',
        ImageUrl : '/images/characters/good/Minion5.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 1
    },{
        Id : 16,
        Name : 'Percival',
        ImageUrl : '/images/characters/good/Percival.png',
        Alignment : 'Good',
        Description : 'Loyal servant of Arthur',
        Type : 9
    }];

    return {
        Characters:Characters
    }
})();

module.exports = CharacterDatabase;