import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { MessageType } from './Enums/MessageType';
import { SocketMessage } from './Models/SocketMessage';

@Injectable()
export class WebsocketService {

  private socket;

  public set userName(userName) {
    console.log('SET NAME TO : ' + userName);
    this.socket.userName = userName;
  }

  public get userName() {
    return this.socket.userName;
  }

  public set roomName(roomName) {
    console.log('SET ROOM NAME TO : ' + roomName);
    this.socket.roomName = roomName;
  }

  public get roomName() {
    return this.socket.roomName;
  }

  constructor() {
    console.log('WebSocket Service constructor');
  }

  connect(): Rx.Subject<MessageEvent> {
    console.log('WebSocket Service connect method run');
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    this.socket = io(environment.ws_url);
    console.log(this.socket);
    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    const observable = new Observable(observer => {
        this.socket.on(MessageType.INCOMING_MESSAGE, (data) => {
          console.log('Received message from Websocket Server');
          observer.next(data);
        });

        this.socket.on(MessageType.AVAILABLE_ROOMS, (data) => {
          console.log('RECEIVE! rooms');
          observer.next(data);
        });

        this.socket.on(MessageType.PLAYERS_IN_ROOM, (data) => {
          console.log('Receiving players in room');
          observer.next(data);
        });

        this.socket.on(MessageType.JOIN_ROOM, (data) => {
          console.log('New Player Joined the room');
          observer.next(data);
        });

        this.socket.on(MessageType.GAME_START, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.SENDING_CHARACTER_CARD, (data) => {
          console.log('Receiving new character card from the server');
          observer.next(data);
        });

        this.socket.on(MessageType.INIT_GAME, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.LEAVE_ROOM, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.PLAYER_MISSION_CHANGE, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.GET_SPECIAL_CHARACTERS, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.GET_DEFAULT_CAMPAIGN, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.START_VOTING, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.VOTE_FOR_TEAM, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.VOTE_MISSION, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.RESET_MISSION, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.END_GAME, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.MISSION_VOTES_RESULT, (data) => {
          console.log('receiving mission Results');
          observer.next(data);
        });

        this.socket.on(MessageType.CHECK_FOR_NAME_UNIQUE, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.CHECK_FOR_ROOM_NAME_UNIQUE, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.PLAYER_JOINED, (data) => {
          observer.next(data);
        });

        this.socket.on(MessageType.GET_DATA_FOR_ENDING, (data) => {
          observer.next(data);
        });

        return () => {

        };
    });

    const observer = {
        next: (data: SocketMessage) => {
          if (data) {
            switch (data.MessageType) {
              case MessageType.CREATE_ROOM: {
                this.socket.emit(MessageType.CREATE_ROOM, JSON.stringify(data.Content));
                break;
              }

              case MessageType.INCOMING_MESSAGE: {
                this.socket.emit(MessageType.INCOMING_MESSAGE,
                  JSON.stringify({ clientId: this.socket.id, content: data, userName: this.userName}));
                this.socket.userName = data;
                break;
              }

              case MessageType.AVAILABLE_ROOMS: {
                this.socket.emit(MessageType.AVAILABLE_ROOMS);
                break;
              }
              case MessageType.JOIN_ROOM: {
                this.socket.emit(MessageType.JOIN_ROOM, JSON.stringify(data.Content));
                break;
              }
              case MessageType.LEAVE_ROOM: {
                console.log('somebody leaving room !');
                this.socket.emit(MessageType.LEAVE_ROOM, JSON.stringify(data.Content));
                break;
              }
              case MessageType.SET_USERNAME: {
                this.socket.emit(MessageType.SET_USERNAME, data.Content);
                break;
              }

              case MessageType.PLAYERS_IN_ROOM: {
                this.socket.emit(MessageType.PLAYERS_IN_ROOM, JSON.stringify(data.Content));
                break;
              }

              case MessageType.PLAYER_UPDATE: {
                this.socket.emit(MessageType.PLAYER_UPDATE, JSON.stringify(data.Content));
                break;
              }
              case MessageType.GAME_START: {
                this.socket.emit(MessageType.GAME_START, '');
                break;
              }
              case MessageType.INIT_GAME: {
                this.socket.emit(MessageType.INIT_GAME, JSON.stringify(data.Content));
                break;
              }
              case MessageType.PLAYER_MISSION_CHANGE: {
                this.socket.emit(MessageType.PLAYER_MISSION_CHANGE, JSON.stringify(data.Content));
                break;
              }
              case MessageType.GET_SPECIAL_CHARACTERS: {
                this.socket.emit(MessageType.GET_SPECIAL_CHARACTERS, JSON.stringify(data.Content));
                break;
              }
              case MessageType.GET_DEFAULT_CAMPAIGN: {
                this.socket.emit(MessageType.GET_DEFAULT_CAMPAIGN, JSON.stringify(data.Content));
                break;
              }

              case MessageType.START_VOTING: {
                this.socket.emit(MessageType.START_VOTING, JSON.stringify(data.Content));
                break;
              }

              case MessageType.VOTE_FOR_TEAM: {
                this.socket.emit(MessageType.VOTE_FOR_TEAM, JSON.stringify(data.Content));
                break;
              }

              case MessageType.VOTE_MISSION: {
                this.socket.emit(MessageType.VOTE_MISSION, JSON.stringify(data.Content));
                break;
              }

              case MessageType.CHECK_FOR_NAME_UNIQUE: {
                this.socket.emit(MessageType.CHECK_FOR_NAME_UNIQUE, JSON.stringify(data.Content));
                break;
              }

              case MessageType.CHECK_FOR_ROOM_NAME_UNIQUE: {
                this.socket.emit(MessageType.CHECK_FOR_ROOM_NAME_UNIQUE, JSON.stringify(data.Content));
                break;
              }

              case MessageType.REQUEST_NEW_CHARACTERS: {
                this.socket.emit(MessageType.REQUEST_NEW_CHARACTERS, JSON.stringify(data.Content));
                break;
              }

              case MessageType.GET_DATA_FOR_ENDING: {
                this.socket.emit(MessageType.GET_DATA_FOR_ENDING, JSON.stringify(data.Content));
                break;
              }
            }

          }
        },
        error: (errorMsg) => {
          console.log(errorMsg);
          this.socket.disconnect();
        },
        complete: (data) => {
          this.socket.disconnect();
        }
    };

    // this.socket.on('connect', function () {
    //   alert('connect');
    // });
    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Rx.Subject.create(observer, observable);
  }
}
