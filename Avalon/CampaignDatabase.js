var CampaignDatabase = (function() {
    var Campaigns = [
    {
        NumberOfPlayers : 5,
        RecommendedMordredMinions : 2,
        VotingFailedLimit : 5,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 2,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 3,
            NumberOfCompanions : 2,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 4,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 5,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }]
    },
    {
        NumberOfPlayers : 6,
        RecommendedMordredMinions: 2,
        VotingFailedLimit : 5,
        Missions : [{
            Id: 1,
            NumberOfCompanions : 2,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 3,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 4,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 5,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }]
    },{
        NumberOfPlayers : 7,
        RecommendedMordredMinions : 3,
        VotingFailedLimit : 5,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 2,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 3,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 4,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 2
        }, {
            Id: 5,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }]
    },{
        NumberOfPlayers : 8,
        RecommendedMordredMinions : 3,
        VotingFailedLimit : 5,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 3,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 4,
            NumberOfCompanions : 5,
            NumberOfFailsToFailMission : 2
        }, {
            Id: 5,
            NumberOfCompanions : 5,
            NumberOfFailsToFailMission : 1
        }]
    },{
        NumberOfPlayers : 9,
        RecommendedMordredMinions : 3,
        VotingFailedLimit : 5,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 3,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 4,
            NumberOfCompanions : 5,
            NumberOfFailsToFailMission : 2
        }, {
            Id: 5,
            NumberOfCompanions : 5,
            NumberOfFailsToFailMission : 1
        }]
    },{
        NumberOfPlayers : 10,
        RecommendedMordredMinions : 4,
        VotingFailedLimit : 5,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 3,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 3,
            NumberOfCompanions : 4,
            NumberOfFailsToFailMission : 1
        }, {
            Id: 4,
            NumberOfCompanions : 5,
            NumberOfFailsToFailMission : 2
        }, {
            Id: 5,
            NumberOfCompanions : 5,
            NumberOfFailsToFailMission : 1
        }]
    },
// Tests only
{
    NumberOfPlayers : 2,
    VotingFailedLimit : 5,
    RecommendedMordredMinions : 1,
    Missions: [{
        Id: 1,
        NumberOfCompanions : 1,
        NumberOfFailsToFailMission : 1,
    }, {
        Id: 2,
        NumberOfCompanions : 1,
        NumberOfFailsToFailMission : 1
    }]}, 
    {
        NumberOfPlayers : 3,
        VotingFailedLimit : 5,
        RecommendedMordredMinions : 1,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 1,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 1,
            NumberOfFailsToFailMission : 1
        }]},
    {
        NumberOfPlayers : 4,
        
        VotingFailedLimit : 5,
        RecommendedMordredMinions : 1,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 1,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 1,
            NumberOfFailsToFailMission : 1
        }]},
    {
        NumberOfPlayers : 1,
        VotingFailedLimit : 5,
        RecommendedMordredMinions : 1,
        Missions: [{
            Id: 1,
            NumberOfCompanions : 1,
            NumberOfFailsToFailMission : 1,
        }, {
            Id: 2,
            NumberOfCompanions : 1,
            NumberOfFailsToFailMission : 1
        }]}
    ];

    return {
        Campaigns:Campaigns
    }
})();
module.exports = CampaignDatabase;