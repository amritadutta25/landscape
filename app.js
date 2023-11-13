//Landscaping business

// Collection of tools available to the player. 
// A tool object includes the tool name, money it generates and price to buy the tool.
const tools = [
    {name:'teeth', generate:5, price:0},
    {name:'rusty scissor', generate:5, price:5},
    {name:'push lawnmower', generate:50, price:25 },
    {name:'battery-powered lawnmower', generate:100, price:250},
    {name:'team', generate:250, price:500}
]

// player object keeps track of the tool he is using, amount of money he has and if he won the game or not
const player = {
    tool: 0, // index of the tools array, player starts with the first basic tool
    money: 0, // initially the player has $0
    winStatus: False // at the start of the game player has not won the game
}

function winCondition()
{  // win the game when you have a team of starving students and $1000
    if ((player.tool === 'team') && (player.money >= 1000))
    {
        // send a message to the user telling them, they've won
        alert("Congrats! You have won!")
    }
}

