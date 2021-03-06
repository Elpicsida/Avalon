export enum MessageType {
    INCOMING_MESSAGE = 'message',
    AVAILABLE_ROOMS = 'availableRooms',
    CREATE_ROOM = 'createRoom',
    JOIN_ROOM = 'joinRoom',
    LEAVE_ROOM = 'leaveRoom',
    PLAYERS_IN_ROOM = 'playersInRoom',
    SET_USERNAME = 'setUserName',
    PLAYER_UPDATE = 'playerUpdate',
    GAME_START = 'gameStart',
    SENDING_CHARACTER_CARD = 'sendingCharacterCard',
    INIT_GAME = 'initGame',
    PLAYER_MISSION_CHANGE = 'missionChanged',
    GET_SPECIAL_CHARACTERS = 'getSpecialCharacters',
    GET_DEFAULT_CAMPAIGN = 'getDefaultCampaign',
    START_VOTING = 'startVoting',
    VOTE_FOR_TEAM = 'voteForTeam',
    VOTE_MISSION = 'voteMission',
    RESET_MISSION = 'resetMission',
    MISSION_VOTES_RESULT = 'missionVotesResult',
    END_GAME = 'endGame',
    CHECK_FOR_NAME_UNIQUE = 'checkForNameUnique',
    CHECK_FOR_ROOM_NAME_UNIQUE = 'checkForRoomNameUnique',
    PLAYER_JOINED = 'playerJoined',
    REQUEST_NEW_CHARACTERS = 'requestNewCharacters',
    GET_DATA_FOR_ENDING = 'getDataForEnding'
}
