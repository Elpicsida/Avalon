const CharacterDatabase = require('./CharacterDatabase');
const CampaignDatabase = require('./CampaignDatabase');

var Game = (function() {
    var attachCharactersToSockets = function(roomOptions, sockets) {
        let specialCharacterIds = roomOptions.SpecialCharacters.map(x => x.Id);
        let commonEvil = CharacterDatabase.Characters.filter(x => x.Type === 0).map(x => x.Id);
        let commonGood = CharacterDatabase.Characters.filter(x => x.Type === 1).map(x => x.Id);
        let i = roomOptions.NumberOfEvil;
        let randomNormalGoodCharacterIds = [];
        let randomNormalEvilCharacterIds = [];
        while(i > 0) {
            let id = Math.floor(Math.random() * commonEvil.length);
            randomNormalEvilCharacterIds.push(commonEvil[id]);
            commonEvil.splice(commonEvil[id], 1);
            i--;
        }
        i = roomOptions.NumberOfGood;
        while(i > 0) {
            let id = Math.floor(Math.random() * commonGood.length);
            randomNormalGoodCharacterIds.push(commonGood[id]);
            commonEvil.splice(commonGood[id], 1);
            i--;
        }

        let allIds = specialCharacterIds.concat(randomNormalEvilCharacterIds, randomNormalGoodCharacterIds);
        
        for (let i = 0 ; i < sockets.length; i++) {
            let selectedId = Math.floor(Math.random() * allIds.length);
            let selectedCharacter = CharacterDatabase.Characters.filter(x => x.Id === allIds[selectedId])[0];
            sockets[i].Character = selectedCharacter;
            allIds.splice(selectedId, 1);
        }
    };

    var addSpecialAbilitiesToCharacters = function (sockets) {
        for (let i = 0 ; i < sockets.length; i++) {
            let otherSockets = sockets.filter(x => x.id != sockets[i].id);
            switch(sockets[i].Character.Type) {
                case 0 : //Normal Evil :
                {
                    let friends = otherSockets.filter(x => [0,2,3,4,5,6].indexOf(x.Character.Type) > -1).map(x => x.userName);
                    let msg = '';
                    if (friends && friends.length) {
                        msg = "Your friends are " + friends.join();
                    } else {
                        msg = "You are alone";
                    }
                    sockets[i].Character.AdditionalInfo = "You are common evil. " + msg;
                    break;
                }
                case 1: //Normal Good :
                {
                    sockets[i].Character.AdditionalInfo = "You don't know your allies";
                    break;
                }
                case 2: //Mordred :
                {
                    let friends = otherSockets.filter(x => x.Character.Type === 0).map(x => x.userName);
                    let msg = '';
                    if (friends && friends.length) {
                        msg = "Your friends are " + friends.join();
                    } else {
                        msg = "You are alone";
                    }
                    sockets[i].Character.AdditionalInfo = "You are unknown to Merlin. " + msg;
                    break;
                }
                case 3: // Assassin
                {
                    let friends = otherSockets.filter(x => x.Character.Type === 0).map(x => x.userName);

                    let msg = '';
                    if (friends && friends.length) {
                        msg = "Your friends are " + friends.join();
                    } else {
                        msg = "You are alone";
                    }

                    sockets[i].Character.AdditionalInfo = "You have to kill Merlin at the end of the game. " + msg;
                    break;
                }
                case 4: { // LancelotEvil
                    sockets[i].Character.AdditionalInfo = "You don't know your friends. Watch out for Lancelot changing cards";
                    break;
                }
                case 5: // Morgana
                {
                    let friends = otherSockets.filter(x => x.Character.Type === 0).map(x => x.userName);
                    sockets[i].Character.AdditionalInfo = "You are reveiled to Percival with Merlin. You're friends are " + friends.join();
                    break;
                }
                case 6: // Oberon
                {
                    sockets[i].Character.AdditionalInfo = "You are evil but you don't know your friends";
                    break;
                }
                case 7: //Merlin
                {
                    let enemies = otherSockets.filter(x => [0,3,4,5,6].indexOf(x.Character.Type) > -1).map(x => x.userName);
                    sockets[i].Character.AdditionalInfo = "Your enemies are " + enemies.join();
                    break;
                }
                case 8: // Lancelot Good
                {
                    sockets[i].Character.AdditionalInfo = "You don't know your friends. Watch out for Lancelot changing cards";
                    break;
                }
                case 9: // Percival
                {
                    let merlinAndMorgana = otherSockets.filter(x => [5,7].indexOf(x.Character.Type) > -1).map(x => x.userName);
                    sockets[i].Character.AdditionalInfo = "One of those is Merlin and Morgana: " + merlinAndMorgana.join();
                    break;
                }
            }
        }
        
    }

    var getSpecialCharacters = function () {
        return CharacterDatabase.Characters.filter(x => x.Type > 1);
    }

    var getDefaultCampaign = function(numberOfPlayers) {
        let campaign = CampaignDatabase.Campaigns.find(x => x.NumberOfPlayers == numberOfPlayers);
        return campaign;
    }

    return {
        attachCharactersToSockets : attachCharactersToSockets,
        addSpecialAbilitiesToCharacters : addSpecialAbilitiesToCharacters,
        getSpecialCharacters : getSpecialCharacters,
        getDefaultCampaign : getDefaultCampaign
    }
}());

module.exports = Game;