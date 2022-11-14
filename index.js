// code your solution here
function superbowlWin(array){
    const winnerYear = array.find(item => item.result ==="W")
    if (winnerYear !== undefined){
        return winnerYear.year
    } else {
        return undefined
    }

}