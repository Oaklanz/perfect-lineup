const validateLineup = (lineup) => {
    
    //returns false when the lineup has a total salary greater than 45000'
    
    const totalSalary = (lineup) => {lineup.map(lineup.salary).reduce((accm, val) => accm  + val, 0)
        if (totalSalary > 45,000)
        return false 
    }
    
    //returns false when lineup includes too many players from a single team
    
    const ManyPlayers = (lineup) =>{
         lineup.map(lineup => lineup.teamId) 

         let duplicateIds = [...new Set(teamIds)]
         
         let numberOfDuplicates = [] 
         duplicateIds.forEach(duplicateId => {let count = teamIds.filter(teamId => teamId === duplicateId).lengthnumberOfDuplicates.push(count)} )
         
         if (Math. max (numberOfDuplicates.ManyPlayers) > 2) 
             return ManyPlayers, false; 

           }
                                
    //returns false when lineup includes too many players from a single game

     const singleGame = (lineup) => {lineup.map(lineup => lineup.gameId)

          let duplicateIds = [...new Set(gameIds)]

        let numberOfDuplicates = []

        duplicateIds.forEach(duplicateId => {let count = gameIds.filter(gameId => gameId === duplicateId).lengthnumberOfDuplicates.push(count)} )
         
         if (Math. max (numberOfDuplicates.singleGame) > 3) 
             return singleGame, false

    }
    //returns false when lineup includes too many players

     const numberOfPlayers = (lineup) => {
         lineup.map(lineup.id).reduce((accm, val) => accm  + val, 0)

         if (numberOfPlayers > 9 )
        return false 
     }



    //eturns false when the lineup does not have the right number of players at each position'
    //returns false when the lineup includes too few players from a single position'
    //returns false when the lineup does not include a player from a position'
    
    // //returns true when the lineup satisfies all conditions
    return true
} 


module.exports = validateLineup