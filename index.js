const validateLineup = (lineup) => {
    let positionCounts = getPositionCount(lineup) && 
    let positionCount =  fewPositionCount(lineup) &&
    let positionCount = includePositionCount(lineup) &&
    let totalSalary > 45,000

    const totalSalary = (lineup) => {
        lineup.map(lineup.salary).reduce((acc, val) => acc  + val, 0)
        if (totalSalary > 45,000)
        return false 
    }
    
    const ManyPlayers = (lineup) =>{
         lineup.map(lineup => lineup.teamId) 

         let duplicateIds = [...new Set(teamIds)]
         
         let numberOfDuplicates = [] 
         duplicateIds.forEach(duplicateId => {let count = teamIds.filter(teamId => teamId === duplicateId).lengthnumberOfDuplicates.push(count)} )
         
         if (Math. max (numberOfDuplicates.ManyPlayers) > 2) 
             return ManyPlayers, false; 

           }

     const singleGame = (lineup) => {lineup.map(lineup => lineup.gameId)

          let duplicateIds = [...new Set(gameIds)]

        let numberOfDuplicates = []

        duplicateIds.forEach(duplicateId => {let count = gameIds.filter(gameId => gameId === duplicateId).lengthnumberOfDuplicates.push(count)} )
         
         if (Math. max (numberOfDuplicates.singleGame) > 3) 
             return singleGame, false

    }
    
     const numberOfPlayers = (lineup) => {
         lineup.map(lineup.id).reduce((accm, val) => accm  + val, 0)

         if (numberOfPlayers > 9 )
        return false 
     }


        const singlePosition = (position) => { return position['P'] === 1 || ['C'] === 1 || ['3B'] === 1 || ['1B'] === 1 || ['2B'] === 1 || ['SS'] === 1 || ['OF'] === 3 }
        
        const getPositionCount = (lineup) => {
            return lineup.reduce((counts, player) => { 
                counts[player.position] = counts[player.position] === undefined ? 1 : counts[player.position] + 1
            
            return counts 
        }, {} )  
        }


        const fewPlayers = (position) => { return position['P'] === 1 || ['SS'] === 1 || ['C'] === 1 || ['1B'] === 1 || ['2B'] === 1 || ['3B'] === 1 || ['OF'] === 3 }

        const fewPositionCount = (lineup) => {
            return lineup.reduce((counts, player) => {
                counts[player.position] = counts[player.position] === undefined ? 1 : counts[player.position] + 1

            return counts    
        }, {} )
         }


        const includePlayerPositionn = (position) => { return position['1B'] === 1 || ['2B'] === 1 || ['3B'] === 1 || ['P'] === 1 || ['SS'] === 1 || ['OF'] === 3 }

        const includePositionCount = (lineup) => {
            return lineup.reduce((counts, player) => {
                counts[player.position] = counts[player.position] === undefined ? 1 : counts[player.position] + 1

            return counts    
        }, {} )
         }
    

    return true
} 


module.exports = validateLineup