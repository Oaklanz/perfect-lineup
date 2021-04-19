const validateLineup = (lineup) => {
    
    //returns false when the lineup has a total salary greater than 45000'
    
    const totalSalary = (lineup) => {lineup.map(lineup.salary).reduce((accm, val) => accm  + val, 0)
        if (totalSalary > 45,000)
        return false 
    }
    
    //returns false when lineup includes too many players from a single team
    //loop through array
    //if 
    const ManyPlayers = (lineup) =>{
         lineup.map(lineup => lineup.teamId) 

         let duplicateIds = [...new Set(teamIds)]
         
         let numberOfDuplicates = [] 
         duplicateIds.forEach(duplicateId => {let count = teamIds.filter(teamId => teamId === duplicateId).lengthnumberOfDuplicates.push(count)} )
         
         if (Math. max (numberOfDuplicates) > 2) 
             return false 
                                               
           }
                                

    //returns false when lineup includes too many players from a single game

     const lineupincludesTooManyPlayers = () => {return false

    }
    //returns false when lineup includes too many players
    //eturns false when the lineup does not have the right number of players at each position'
    //returns false when the lineup includes too few players from a single position'
    //returns false when the lineup does not include a player from a position'
    
    // //returns true when the lineup satisfies all conditions
    return true
} 


module.exports = validateLineup