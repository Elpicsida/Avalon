export class Player {
    Name: string = '';
    Ready: boolean = false;
    Room: string = '';
    IsLeader: boolean = false;
    IsGoingOnAMission: boolean = false;
    hasVoted: boolean = false;
    voteValue?: boolean = null;
    hasSelectedMissionResult: boolean = false;
    constructor(name: string = '', ready: boolean = false) {
        this.Name = name;
        this.Ready = ready;
    }
}
