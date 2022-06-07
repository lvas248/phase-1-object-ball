function gameObject(){
    const ball = {
        home: 
            {
                teamName: "Brooklyn Nets",
                colors: ["black", "white"],
                players: {
                                "Alan Anderson":{
                                                number: 0,
                                                shoe: 16,
                                                points: 22,
                                                rebounds: 12,
                                                assists: 12,
                                                steals: 3,
                                                blocks: 1,
                                                slamDunks: 1
                                            }
                            ,
                            
                                "Reggie Evans":{
                                                number: 30,
                                                shoe: 14,
                                                points: 12,
                                                rebounds: 12,
                                                assists: 12,
                                                steals: 12,
                                                blocks: 12,
                                                slamDunks: 7
                                            }
                            ,
                            
                                "Brook Lopez":{
                                                number: 11,
                                                shoe: 17,
                                                points: 17,
                                                rebounds: 19,
                                                assists: 10,
                                                steals: 3,
                                                blocks: 1,
                                                slamDunks: 15
                                            }
                            ,
                            
                                "Mason Plumlee":{
                                                number: 1,
                                                shoe: 19,
                                                points: 26,
                                                rebounds: 12,
                                                assists: 6,
                                                steals: 3,
                                                blocks: 8,
                                                slamDunks: 5
                                            }
                            ,
                            
                                "Jason Terry":{
                                                number: 31,
                                                shoe: 15,
                                                points: 19,
                                                rebounds: 2,
                                                assists: 2,
                                                steals: 4,
                                                blocks: 11,
                                                slamDunks: 1
                                            }
                            
                    
                    
                                        }
                            

                            
                            
            },

            away: 
                {
                    teamName: "Charlotte Hornets",
                    colors: ["Turqoise", "Purple"],
                    players: {
                                
                                    "Jeff Adrien":{
                                                    number: 4,
                                                    shoe: 18,
                                                    points: 10,
                                                    rebounds: 1,
                                                    assists: 1,
                                                    steals: 2,
                                                    blocks: 7,
                                                    slamDunks: 2
                                                }
                                ,
                                
                                    "Bismak Biyombo":{
                                                    number: 0,
                                                    shoe: 16,
                                                    points: 12,
                                                    rebounds: 4,
                                                    assists: 7,
                                                    steals: 7,
                                                    blocks: 15,
                                                    slamDunks: 10
                                                }
                                ,
                                
                                    "Desagna Diop":{
                                                    number: 2,
                                                    shoe: 14,
                                                    points: 24,
                                                    rebounds: 12,
                                                    assists: 12,
                                                    steals: 4,
                                                    blocks: 5,
                                                    slamDunks: 5
                                                }
                                ,
                                
                                    "Ben Gordon":{
                                                    number: 8,
                                                    shoe: 15,
                                                    points: 33,
                                                    rebounds: 3,
                                                    assists: 2,
                                                    steals: 1,
                                                    blocks: 1,
                                                    slamDunks: 0
                                                }
                                ,
                                
                                    "Brendan Haywood":{
                                                    number: 33,
                                                    shoe: 15,
                                                    points: 6,
                                                    rebounds: 12,
                                                    assists: 12,
                                                    steals: 22,
                                                    blocks: 5,
                                                    slamDunks: 12
                                    }
                        
                        
                            }
               
                },
    }
    return ball;
}





function numPointScored(playerName){
    const game = gameObject()

    for(const gameKey in game){
        const teamObj = game[gameKey]
        for(const teamKey in teamObj){
            const playerObj = teamObj[teamKey]
            for(const playerKey in playerObj){
                if(playerKey === playerName){
                   return playerObj[playerName].points
                }   
            } 
            }
        }
}

function shoeSize(playerName){
        const game = gameObject()
        
        for(const gameKey in game){
            const teamObj = game[gameKey]
            for(const teamKey in teamObj){
                const playerObj = teamObj[teamKey]
                for(const playerKey in playerObj){
                    if(playerKey === playerName){
                        return playerObj[playerName].shoe
                    }
                }
            }
        }
}

function teamColors(teamName){
        const game = gameObject()
        for(const gameKey in game){
            const teamObj = game[gameKey]
            for(const teamKey in teamObj){
                if(teamObj[teamKey] === teamName){
                    return teamObj.colors
                }
                
            }
        }
}

function teamNames(){
        const game = gameObject()
        const teamArray = []
        for(const gameKey in game){
           const teamObj = game[gameKey]
           for(const teamKey in teamObj){
               
               if(teamKey === "teamName"){
                   const name = teamObj[teamKey]
                   teamArray.push(name)
               }
            }
        } 
            return teamArray
}
    

function playerNumbers(teamName){
        let playerNumberArray = []
        const game = gameObject()
        for(let gameElements in game){
            let teamObj = game[gameElements]
            for(let teamElements in teamObj){
                if(teamObj[teamElements] === teamName){
                    for(teamElements in teamObj){
                        let playerObj = teamObj[teamElements]
                        for(let playerElement in playerObj){
                           let stats = playerObj[playerElement]
                           for(let statElements in stats){
                               if(statElements === "number"){
                                   playerNumberArray.push(stats[statElements])
                                }
                            }
                        }
                    }
                }
            }
        }return playerNumberArray
}

function playerStats(playerName){
        let game = gameObject()
        for(let gameElement in game){
            let teamObj = game[gameElement]
            for(let teamElement in teamObj){
                let playerObj = teamObj[teamElement]
                for(let playerElement in playerObj){
                    if(playerElement === playerName){
                        return playerObj[playerElement]
                    }
                }
                
            }
        }
}
      
function bigShoeRebounds(){
    //find the player with the biggest shoe size and return their rebound stat
    let game = gameObject()
    for(let gameElement in game){
        let teamObj = game[gameElement]
        for(let teamElement in teamObj){
            let playerObj = teamObj[teamElement]
            for(let playerElement in playerObj){
                if(playerObj[playerElement].shoe === largestStat("shoe")){
                    return playerObj[playerElement].rebounds
                }
            }
        }
    }
}   
    
function mostPointsScored(){
    let game = gameObject()
    for(let gameElement in game){
        let teamObj = game[gameElement]
        for(let teamElement in teamObj){
            let playerObj = teamObj[teamElement]
            for(let playerElement in playerObj){
                if(playerObj[playerElement].points === largestStat("points")){
                  return playerElement
                }
            }
        }
    }
}

function winningTeam(){
    let netsTotalPoints = 0
    let hornetsTotalPoints = 0
    let game = gameObject()
    for(let gameElements in game){
        let teamObj = game[gameElements]
        for(let teamElements in teamObj){
            let playerObj = teamObj[teamElements]
            for(let playerElements in playerObj){
                if(teamObj.teamName === "Brooklyn Nets" && Number.isInteger(playerObj[playerElements].points)){
                    netsTotalPoints = netsTotalPoints + playerObj[playerElements].points
                }
                if(teamObj.teamName === "Charlotte Hornets" && Number.isInteger(playerObj[playerElements].points)){
                    hornetsTotalPoints = hornetsTotalPoints + playerObj[playerElements].points
                }  
            }
               
        }
    }
    if(netsTotalPoints > hornetsTotalPoints){
     return "Brooklyn Nets"
    }else{
        return "Charlotte Hornets"
    }

}

function playerWithLongestName(){
    //Create and array of player names
    let playerArray = []
    let game = gameObject()
    for(let gameElement in game){
        let teamObj = game[gameElement]
        for(let teamElement in teamObj){
            let playerObj = teamObj[teamElement]
            for(let playerName in playerObj){
                if(Number.isNaN(parseInt(playerName))){
                    playerArray.push(playerName)
                    
                }
                
            }
        }
    }
    // sort the array of player names by length + return longest name
    for(let j = 0; j<playerArray.length; j++){ 
        for(let i = 0; i < playerArray.length - 1; i++){
            if(playerArray[i].length < playerArray[i+1].length){
                let temp = playerArray[i+1]
                playerArray[i+1] = playerArray[i]
                playerArray[i] = temp
            }
        }
    } return (playerArray[0])
   
}

function doesLongNameStealATon(){
    let mostSteals = largestStat("steals")
    let playerWithMostSteals;
    let game = gameObject()
    for(let gameElement in game){
        let teamObj = game[gameElement]
        for(let teamElement in teamObj){
            let playerObj = teamObj[teamElement]
            for(let playerElement in playerObj){
                let stats = playerObj[playerElement]
                if(stats.steals === mostSteals){
                    playerWithMostSteals = playerElement
                }
                
                
            }
        }
    }
    return (playerWithMostSteals === playerWithLongestName())
}
        
function largestStat(stat){
    let statArray = []
    //Find values of stat for all players and put them in array
    let game = gameObject()
    for( let gameElement in game){
        let teamObj = game[gameElement]
        for(let teamElements in teamObj){
            let playerObj = teamObj[teamElements]
            for(let playerElements in playerObj){
                if(Number.isInteger(playerObj[playerElements][stat])){
                statArray.push(playerObj[playerElements][stat])
                }
            }
        } 
    }
    //Sort the array in decending order and return first index to get highest value
    for(let j = 0; j < statArray.length; j++){
        for(let i = 0; i < statArray.length; i++){
            if(statArray[i] < statArray[i+1]){
                let temp = statArray[i+1]
                statArray[i+1] = statArray[i]
                statArray[i] = temp
            }
        }
    } return statArray[0]
}
