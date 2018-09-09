import { Injectable } from '@angular/core';
import { WebsocketService } from './web-socket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { SocketMessage } from './Models/SocketMessage';
import { MessageType } from './Enums/MessageType';
import { Player } from './Models/Player';
import { Room } from './Models/Room';

@Injectable()
export class ChatService {

  messages: Subject<any>;
 
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      });
   }

   getUserName(): string {
     return this.wsService.userName;
   }

   getRoom(): string {
     return this.wsService.roomName;
   }

  setUserName(userName) {
    this.wsService.userName = userName;
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.SET_USERNAME;
    socketMessage.Content = userName;
    this.messages.next(socketMessage);
  }

  sendMsg(msg) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.INCOMING_MESSAGE;
    socketMessage.Content = msg;
    this.messages.next(socketMessage);
  }

  sendRequestForRooms() {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.AVAILABLE_ROOMS;
    this.messages.next(socketMessage);
  }

  sendRequestForPlayersInRooms() {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.PLAYERS_IN_ROOM;
    socketMessage.Content = this.wsService.roomName;
    this.messages.next(socketMessage);
  }

  createNewRoom(room: Room) {
    this.wsService.roomName = room.name;
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.CREATE_ROOM;
    socketMessage.Content = room;
    this.messages.next(socketMessage);
  }

  joinRoom(roomName) {
    this.wsService.roomName = roomName;
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.JOIN_ROOM;
    socketMessage.Content = roomName;
    this.messages.next(socketMessage);
  }

  leaveRoom() {
    delete this.wsService.roomName;
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.LEAVE_ROOM;
    socketMessage.Content = this.wsService.userName;
    this.messages.next(socketMessage);
  }

  sendPlayerUpdate(isReady: boolean) {
    const player = new Player();
    const socketMessage = new SocketMessage();
    player.Name = this.wsService.userName;
    player.Room = this.wsService.roomName;
    player.Ready = isReady;
    socketMessage.MessageType = MessageType.PLAYER_UPDATE;
    socketMessage.Content = player;
    this.messages.next(socketMessage);
  }

  startGame() {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.GAME_START;
    this.messages.next(socketMessage);
  }

  initGame() {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.INIT_GAME;
    socketMessage.Content = this.wsService.roomName;
    this.messages.next(socketMessage);
  }

  onMissionApplyUpdate(userName: string, isOnMission: boolean) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.PLAYER_MISSION_CHANGE;
    socketMessage.Content = { userName : userName, onMission : isOnMission};
    this.messages.next(socketMessage);
  }

  getSpecialCharacters() {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.GET_SPECIAL_CHARACTERS;
    this.messages.next(socketMessage);
  }

  getDefaultCampaign(numberOfPlayers: number) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.GET_DEFAULT_CAMPAIGN;
    socketMessage.Content = numberOfPlayers;
    this.messages.next(socketMessage);
  }

  startVoting(playerNames: Array<string>) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.START_VOTING;
    socketMessage.Content = playerNames;
    this.messages.next(socketMessage);
  }
  
  voteForPlayer(voteFor: boolean) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.VOTE_FOR_TEAM;
    socketMessage.Content = { userName: this.getUserName(), voteFor: voteFor };
    this.messages.next(socketMessage);
  }

  voteForMission(voteFor: boolean) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.VOTE_MISSION;
    socketMessage.Content = { userName: this.getUserName(), voteFor: voteFor };
    this.messages.next(socketMessage);
  }

  checkUserName(userName: string) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.CHECK_FOR_NAME_UNIQUE;
    socketMessage.Content = { userName: userName };
    this.messages.next(socketMessage);
  } 

  checkRoomName(roomName: string) {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.CHECK_FOR_ROOM_NAME_UNIQUE;
    socketMessage.Content = { roomName: roomName };
    this.messages.next(socketMessage);
  } 

  sendRequestForNewCharacters() { 
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.REQUEST_NEW_CHARACTERS;
    this.messages.next(socketMessage);
  }

  getDataForEnding() {
    const socketMessage = new SocketMessage();
    socketMessage.MessageType = MessageType.GET_DATA_FOR_ENDING;
    socketMessage.Content = {};
    this.messages.next(socketMessage);
  }
}
