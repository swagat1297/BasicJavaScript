//initializing global variables wit position starting from zero// 
var current_position=0;
var count_dice1=0;
var count_dice2=0;
const final_position=100;
class SnakeandLadder{
    //taking a random value from 1 to 6//
    rollDice(){
        return(Math.ceil(Math.random()*10)%6 + 1);
    }
    //to check the options by taking random value from 1 to 3// 
    checkOption(){
        var dice_played = this.rollDice();
        var option = (Math.ceil(Math.random()*10)%3 + 1);
        switch(option){
            case 1:
                console.log("No Play");
                break;
            case 2:
                console.log("Play Ladder");
                    //first checking if the current position less then 100// 
                   if(current_position < final_position) {
                        current_position = current_position + dice_played;
                        console.log("current position: " + current_position);
                    }
                    else
                        console.log("current position: " + current_position);
                break;
            case 3:
                console.log("Snake");
                 //checking if the position is less then 0//
                if(current_position > 0) {
                    current_position = current_position - dice_played;
                    console.log("current position: " + current_position);
                }
                else
                    current_position = 0;
                    
                break;
            default:
                console.log("no option selected");        
        }
    }
    //for player1 to count the number of dice played and to iterate till final position 100 is reached//
    playerPosition1() {
        while(current_position < final_position)
        {
            this.checkOption();
            count_dice1++;
            //if current position less then or equals to 0 then count restart//
            if(current_position == 0) { 
                console.log("Restart! position less the 0 for playe1");
                count_dice1=0;	   
            }    
            if(current_position == Final_position) {
                console.log("player1 won!");
                break;
            }
        }
    }
    //for player2 to count the number of dice played and to iterate till final position 100 is reached//  
    playerposition2() {
        while(current_position ==  final_position)
        {
            this.checkOption();
            count_dice2++;
            //if current position less then or equals to 0 then count restart//
            if(current_position == 0) {
                console.log("Restart! position less the 0 for player2");
                count_dice2=0;
            }
            if(current_position == final_position) {
                console.log("player2 won!");
                break;
            }
        
        }
    }
    let 
    
}
function compareTwoPlayers(){
    //comparing both the count values the lesser one wins//
    if(count_dice1<count_dice2) {
        console.log("congratulation! player1 won with dice count: " + this.count_dice1);
        console.log("congratulation! player2 loss with dice count: " + this.Count_dice2);
    }
    if(Count_dice1>Count_dice2){
        console.log("congratulation! player2 won with dice count: " + this.count_dice2);
        console.log("congratulation! player1 loss with dice count: " + this.count_dice1);
    }
    else
        console.log("Something went wrong");
}

var SnakeandLadderObject = new SnakeandLadder();

SnakeandLadderObject.playerPosition1();
SnakeandLadderObject.playerposition2();

compareTwoPlayers.call();//calling the function


