let dataFile = 'day12-tiny.txt' //-example (answer:25) east 17, south 8

async function getAllData() {
  let response = await fetch(dataFile)
  let data = await response.text()
  return data
}

function separateLines(data) {
  return data.split("\n")
  console.log(data)
}

function parseCommands(data) {
  let parsedCommands = []
  data.forEach(data => {
    parsedCommands.push([data.charAt(0), parseInt(data.slice(1))])
  })
  console.log(parsedCommands)
  return parsedCommands
}

// HERE, I HAVE MY ARRAY OF COMMAND ARRAYS
function turnLeft(currentPosition,commands) {
    
    if (commands[0][1] === 90) {
      if (currentPosition[2] === "E") {
        currentPosition = [currentPosition[0],currentPosition[1],"N"]
      } else
      if (currentPosition[2] === "W") {
        currentPosition = [currentPosition[0],currentPosition[1],"S"]
      } else
      if (currentPosition[2] === "N") {
        currentPosition = [currentPosition[0],currentPosition[1],"W"]
      } else
      if (currentPosition[2] === "S") {
         currentPosition = [currentPosition[0],currentPosition[1],"E"]
      } 
    
    } else
    if (commands[0][1] === 180) {
      if (currentPosition[2] === "E") {
       currentPosition = [currentPosition[0],currentPosition[1],"W"]
      } else
      if (currentPosition[2] === "W") {
         currentPosition = [currentPosition[0],currentPosition[1],"E"]
      } else
      if (currentPosition[2] === "N") {
        currentPosition = [currentPosition[0],currentPosition[1],"S"]
      } else
      if (currentPosition[2] === "S") {
         currentPosition = [currentPosition[0],currentPosition[1],"N"]
      }
    
    } else
    if (commands[0][1] === 270) {
      if (currentPosition[2] === "E") {
        currentPosition = [currentPosition[0],currentPosition[1],"S"] 
      } else
      if (currentPosition[2] === "W") {
       currentPosition = [currentPosition[0],currentPosition[1],"N"]
      } else
      if (currentPosition[2] === "N") {
          currentPosition = [currentPosition[0],currentPosition[1],"E"]
      } else
      if (currentPosition[2] === "S") {
        currentPosition = [currentPosition[0],currentPosition[1],"W"]
      }
    }
    return currentPosition
  }


function turnRight(currentPosition,commands) {
    if (commands[0][1] === 90) {

      if (currentPosition[2] === "E") {
          currentPosition = [currentPosition[0],currentPosition[1],"S"]
      } else
      if (currentPosition[2] === "W") {
          currentPosition = [currentPosition[0],currentPosition[1],"N"]
      } else
      if (currentPosition[2] === "N") {
         currentPosition = [currentPosition[0],currentPosition[1],"E"]
      } else
      if (currentPosition[2] === "S") {
          currentPosition = [currentPosition[0],currentPosition[1],"W"]
      }
    } else
    if (commands[0][1] === 180) {
      if (currentPosition[2] === "E") {
          currentPosition = [currentPosition[0],currentPosition[1],"W"]
      } else
      if (currentPosition[2] === "W") {
         currentPosition = [currentPosition[0],currentPosition[1],"E"]
      } else
      if (currentPosition[2] === "N") {
          currentPosition = [currentPosition[0],currentPosition[1],"S"]
      } else
      if (currentPosition[2] === "S") {
          currentPosition = [currentPosition[0],currentPosition[1],"N"]
      }
    } else
    if (commands[0][1] === 270) {
      if (currentPosition[2] === "E") {
         currentPosition = [currentPosition[0],currentPosition[1],"N"] 
      } else
      if (currentPosition[2] === "W") {
          currentPosition = [currentPosition[0],currentPosition[1],"S"]
      } else
        if (currentPosition[2] === "N") {
          currentPosition = [currentPosition[0],currentPosition[1],"W"]
      } else
      if (currentPosition[2] === "S") {
          currentPosition = [currentPosition[0],currentPosition[1],"E"]
      }
    } 

    return currentPosition
}
 

function makeFirstMove(currentPosition,commands){
  let nextCommands = commands.slice(1)
  let wayport = [10,1]
  console.log(wayport)
 
  
  if (commands[0][0] === "N") {
    wayport = [wayport[0],wayport[1] + commands[0][1]]
  } else

  if (commands[0][0] === "S") {
      wayport = [wayport[0], wayport[1] - commands[0][1]]
  }  else

  if (commands[0][0] === "E") {
    wayport = [wayport[0] + commands[0][1], wayport[1]]
  } else

  if (commands[0][0] === "W") {
    wayport = [wayport[0] - commands[0][1], wayport[1]]
  } else
 
  if (commands[0][0] === "F") {
      
      console.log("nope")
  
  } else

  if (commands[0][0] === "L") {
    if(commands[0][1] === 90){
      wayport = [wayport[1]*(-1), wayport[0]]
    }
    if(commands[0][1] === 180){
      wayport = [wayport[0]*(-1), wayport[1]*(-1)]
    }
    if(commands[0][1] === 270){
      wayport = [wayport[1], wayport[0]*(-1)]
    }
  
  } else

  if (commands[0][0] === "R") {
       if(commands[0][1] === 90){
      wayport = [wayport[1], wayport[0]*(-1)]
    }
    if(commands[0][1] === 180){
      wayport = [wayport[0]*(-1), wayport[1]*(-1)]
    }
    if(commands[0][1] === 270){
      wayport = [wayport[1]*(-1), wayport[0]]
    }
  }
  
  return { currentPosition, nextCommands, wayport }
}

function makeTheLastMove(position, wayport) {
  console.log({position, wayport})
  console.log(Math.abs(position[0]) + Math.abs(position[1]))
}

function makeAnotherMove(newState) {
  let newPosition = [...newState.currentPosition]
  let newCommands = [...newState.nextCommands] 
  let newWayport = [...newState.wayport]

    if (commands[0][0] === "N") {
    newWayport = [newWayport[0],newWayport[1] + newCommands[0][1]]
  } else

  if (commands[0][0] === "S") {
      newWayport = [newWayport[0], newWayport[1] - newCommands[0][1]]
  }  else

  if (commands[0][0] === "E") {
    newWayport = [newWayport[0] + newCommands[0][1],newWayport[1]]
  } else

  if (commands[0][0] === "W") {
      newWayport = [newWayport[0] - newCommands[0][1], newWayport[1]]
  } else
 
  if (newCommands[0][0] === "F") {
      
      console.log("nope")
  

  } else 
  
   if (newCommands[0][0] === "L") {
    if(newCommands[0][1] === 90){
      newWayport = [newWayport[1]*(-1), newWayport[0]]
    }
    if(newCommands[0][1] === 180){
      newWayport = [newWayport[0]*(-1), newWayport[1]*(-1)]
    }
    if(newCommands[0][1] === 270){
      newWayport = [newWayport[1], newWayport[0]*(-1)]
    }
  
  } else

  if (newCommands[0][0] === "R") {
       if(newCommands[0][1] === 90){
      newWayport = [newWayport[1], newWayport[0]*(-1)]
    }
    if(newCommands[0][1] === 180){
      newWayport = [newWayport[0]*(-1), newWayport[1]*(-1)]
    }
    if(newCommands[0][1] === 270){
      newWayport = [newWayport[1]*(-1), newWayport[0]]
    }
  }

  if (newCommands.length === 1) {
    return makeTheLastMove(newPosition, newWayport)

  } else {
    let newerCommands = newCommands.slice(1) 
  
    return {currentPosition: newPosition, nextCommands: newerCommands, wayport: newWayport }
  }

  
}

function makeAllTheMoves(newState) {
  newState.nextCommands.forEach(item => {
    while (newState.nextCommands.length !==0) {
      newState = makeAnotherMove(newState)
    }
  })
   
}

getAllData()
.then(separateLines)
.then(parseCommands)
.then(commands => makeFirstMove([0,0,"E"],commands))
.then(makeAllTheMoves)
.then(result => console.log(result)) 


//PART 1
// function turnLeft(currentPosition,commands) {
    
//     if (commands[0][1] === 90) {
//       if (currentPosition[2] === "E") {
//         currentPosition = [currentPosition[0],currentPosition[1],"N"]
//       } else
//       if (currentPosition[2] === "W") {
//         currentPosition = [currentPosition[0],currentPosition[1],"S"]
//       } else
//       if (currentPosition[2] === "N") {
//         currentPosition = [currentPosition[0],currentPosition[1],"W"]
//       } else
//       if (currentPosition[2] === "S") {
//          currentPosition = [currentPosition[0],currentPosition[1],"E"]
//       } 
    
//     } else
//     if (commands[0][1] === 180) {
//       if (currentPosition[2] === "E") {
//        currentPosition = [currentPosition[0],currentPosition[1],"W"]
//       } else
//       if (currentPosition[2] === "W") {
//          currentPosition = [currentPosition[0],currentPosition[1],"E"]
//       } else
//       if (currentPosition[2] === "N") {
//         currentPosition = [currentPosition[0],currentPosition[1],"S"]
//       } else
//       if (currentPosition[2] === "S") {
//          currentPosition = [currentPosition[0],currentPosition[1],"N"]
//       }
    
//     } else
//     if (commands[0][1] === 270) {
//       if (currentPosition[2] === "E") {
//         currentPosition = [currentPosition[0],currentPosition[1],"S"] 
//       } else
//       if (currentPosition[2] === "W") {
//        currentPosition = [currentPosition[0],currentPosition[1],"N"]
//       } else
//       if (currentPosition[2] === "N") {
//           currentPosition = [currentPosition[0],currentPosition[1],"E"]
//       } else
//       if (currentPosition[2] === "S") {
//         currentPosition = [currentPosition[0],currentPosition[1],"W"]
//       }
//     }
//     return currentPosition
//   }


// function turnRight(currentPosition,commands) {
//     if (commands[0][1] === 90) {

//       if (currentPosition[2] === "E") {
//           currentPosition = [currentPosition[0],currentPosition[1],"S"]
//       } else
//       if (currentPosition[2] === "W") {
//           currentPosition = [currentPosition[0],currentPosition[1],"N"]
//       } else
//       if (currentPosition[2] === "N") {
//          currentPosition = [currentPosition[0],currentPosition[1],"E"]
//       } else
//       if (currentPosition[2] === "S") {
//           currentPosition = [currentPosition[0],currentPosition[1],"W"]
//       }
//     } else
//     if (commands[0][1] === 180) {
//       if (currentPosition[2] === "E") {
//           currentPosition = [currentPosition[0],currentPosition[1],"W"]
//       } else
//       if (currentPosition[2] === "W") {
//          currentPosition = [currentPosition[0],currentPosition[1],"E"]
//       } else
//       if (currentPosition[2] === "N") {
//           currentPosition = [currentPosition[0],currentPosition[1],"S"]
//       } else
//       if (currentPosition[2] === "S") {
//           currentPosition = [currentPosition[0],currentPosition[1],"N"]
//       }
//     } else
//     if (commands[0][1] === 270) {
//       if (currentPosition[2] === "E") {
//          currentPosition = [currentPosition[0],currentPosition[1],"N"] 
//       } else
//       if (currentPosition[2] === "W") {
//           currentPosition = [currentPosition[0],currentPosition[1],"S"]
//       } else
//         if (currentPosition[2] === "N") {
//           currentPosition = [currentPosition[0],currentPosition[1],"W"]
//       } else
//       if (currentPosition[2] === "S") {
//           currentPosition = [currentPosition[0],currentPosition[1],"E"]
//       }
//     } 

//     return currentPosition
// }
 

// function makeAMove(currentPosition,commands){
//   let nextCommands = commands.slice(1)
//   if (commands[0][0] === "N") {
    
//     currentPosition = [
//       currentPosition[0],
//       currentPosition[1] + commands[0][1],
//       currentPosition[2] 
//     ]
    
//   } else

//   if (commands[0][0] === "S") {
//       currentPosition = [
//       currentPosition[0],
//       currentPosition[1] - commands[0][1],
//       currentPosition[2] 
//     ]
    

//   }  else

//   if (commands[0][0] === "E") {
//     currentPosition = [
//       currentPosition[0] + commands[0][1],
//       currentPosition[1],
//       currentPosition[2] 
//     ]
    
//   } else

//   if (commands[0][0] === "W") {
//       currentPosition = [
//         currentPosition[0] - commands[0][1],
//         currentPosition[1],
//         currentPosition[2] 
//       ]
      
//   } else
 
//   if (commands[0][0] === "F") {
//       if (currentPosition[2] === "N"){
//         currentPosition = [
//           currentPosition[0],
//           currentPosition[1] + commands[0][1],
//           currentPosition[2] 
//         ]
//       } else

//       if (currentPosition[2] === "S"){
//         currentPosition = [
//           currentPosition[0],
//           currentPosition[1] - commands[0][1],
//           currentPosition[2] 
//         ]
     
//       } else

//       if (currentPosition[2] === "E"){
        
//         currentPosition = [
//           currentPosition[0] + commands[0][1],
//           currentPosition[1],
//           currentPosition[2] 
//         ]
       
//       } else

//       if (currentPosition[2] === "W"){
//         currentPosition = [
//           currentPosition[0] - commands[0][1],
//           currentPosition[1],
//           currentPosition[2] 
//         ]
       
//       } else 
//       console.log("nope")
//   } else

//   if (commands[0][0] === "L") {

//     currentPosition = [
//       currentPosition[0], 
//       currentPosition[1], 
//       turnLeft(currentPosition,commands)[2]
//       ]
   
  
//   } else

//   if (commands[0][0] === "R") {
//     currentPosition = [
//       currentPosition[0], 
//       currentPosition[1], 
//       turnRight(currentPosition,commands)[2]
//       ]
//   }


  
//   return { currentPosition, nextCommands }
// }

// function makeTheLastMove(position) {
//   console.log(position)
//   console.log(Math.abs(position[0]) + Math.abs(position[1]))
// }

// function makeAnotherMove(newState) {
//   let newPosition = [...newState.currentPosition]
//   let newCommands = [...newState.nextCommands] 


//    if (newCommands[0][0] === "N") {
//      newPosition = [
//       newPosition[0],
//       newPosition[1] + newCommands[0][1],
//       newPosition[2] 
//     ]
  
//   } else

//   if (newCommands[0][0] === "S") {
//       newPosition = [
//       newPosition[0],
//       newPosition[1] - newCommands[0][1],
//       newPosition[2] 
//     ]
    

//   }  else

//   if (newCommands[0][0] === "E") {
//     newPosition = [
//       newPosition[0] + newCommands[0][1],
//       newPosition[1],
//       newPosition[2] 
//     ]
    
//   } else

//   if (newCommands[0][0] === "W") {
//       newPosition = [
//         newPosition[0] - newCommands[0][1],
//         newPosition[1],
//         newPosition[2] 
//       ]
      
//   } else


//   if (newCommands[0][0] === "F") {
//       if (newPosition[2] === "N"){
//         newPosition = [
//           newPosition[0],
//           newPosition[1] + newCommands[0][1],
//           newPosition[2] 
//         ]
     
//       } else

//       if (newPosition[2] === "S"){
//         newPosition = [
//           newPosition[0],
//           newPosition[1] - newCommands[0][1],
//           newPosition[2] 
//         ]
     
//       } else

//       if (newPosition[2] === "E"){
        
//         newPosition = [
//           newPosition[0] + newCommands[0][1],
//           newPosition[1],
//           newPosition[2] 
//         ]
       
//       } else

//       if (newPosition[2] === "W"){
//         newPosition = [
//           newPosition[0] - newCommands[0][1],
//           newPosition[1],
//           newPosition[2] 
//         ]
       
//       } else {

//       console.log("nope")}
 

//   } else 
  
//     if (newCommands[0][0] === "L") {

//     newPosition = [
//       newPosition[0], 
//       newPosition[1], 
//       turnLeft(newPosition,newCommands)[2]
//       ]
   
  
//   } else

//   if (newCommands[0][0] === "R") {
//     newPosition = [
//       newPosition[0], 
//       newPosition[1], 
//       turnRight(newPosition,newCommands)[2]
//       ]
//   }

//   if (newCommands.length === 1) {
//     return makeTheLastMove(newPosition)

//   } else {
//     let newerCommands = newCommands.slice(1) 
  
//     return {currentPosition: newPosition, nextCommands: newerCommands }
//   }

  
// }

// function makeAllTheMoves(newState) {
//   newState.nextCommands.forEach(item => {
//     while (newState.nextCommands.length !==0) {
//       newState = makeAnotherMove(newState)
//     }
//   })
   
// }


// getAllData()
// .then(separateLines)
// .then(parseCommands)
// .then(commands => makeAMove([0,0,"E"],commands))
// .then(makeAllTheMoves)
// .then(result => console.log(result)) 






