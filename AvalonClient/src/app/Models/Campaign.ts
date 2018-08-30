import { Mission } from './Mission';

export class Campaign {
    Missions: Mission[];
    NumberOfFailedVotes: number = 5;
    NumberOfPlayers: number;
    RecommendedMordredMinions: number;
}
