var words = ["hello", "happy", "smile"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var hide = document.getElementById("hide");
var guessLeft=document.getElementById("guessLeft");
var chancesLeft = randomWord.length;
var userGuessedArray=[];
var tempUserWord=[];
var wins=0;

// This method is called when browser is loaded or refreshed
window.onload = function () {
    hide.innerHTML = hideWord(randomWord);
    guessLeft.textContent=chancesLeft;
};

// This method is called when a key is pressed and released
document.onkeyup=function(event){
   
    if(chancesLeft-1>0)
    {
        chosenWord(event.key);
        guessLeft.textContent=chancesLeft;
    }
    else{
       resetGame();
    }    
};

// This function is called when browser is loaded and used for hiding the word
function hideWord(word) {
    var hidingword = '';
    for(let i=0;i<word.length;i++)
    {
        hidingword=hidingword+' ' + '<span id="' + i + '">_</span>';
    }
    return   hidingword;

};

// This method reveals the letter as the user selects letter
function chosenWord(userKey){ 
    if(randomWord.indexOf(userKey)>-1)
    {    
        for (let i = 0; i < randomWord.length; i++) {        
            if (userKey ===randomWord[i])
            {
                document.getElementById(i).textContent=userKey;
                tempUserWord.push(userKey);            
            }  
        }
        console.log(tempUserWord);
        // isSameWord(userWord);
        if(tempUserWord.length===randomWord.length)
        {
            wins++;
            resetGame();
        }
    }
    else{
        chancesLeft--;
        userGuessedLetters(userKey);        
    }    
}

// This function displays the user guessed letters
function userGuessedLetters(letter){  
    var letters='';  
    userGuessedArray.push(letter);
    for(let i=0;i<userGuessedArray.length;i++)
    {
        if(i===0)
        {
            letters=userGuessedArray[i];
        }
        else
        {
            letters=letters+" , "+userGuessedArray[i];       
        }
        
    }
    document.getElementById("userLetters").textContent=letters;
}

// This function resets the game
function resetGame(){
    randomWord = words[Math.floor(Math.random() * words.length)];
    hide.innerHTML = hideWord(randomWord);
    chancesLeft = randomWord.length;
    userGuessedArray=[];
    guessLeft.textContent=chancesLeft;
    tempUserWord=[];
    document.getElementById("userLetters").textContent='';
    document.getElementById("wins").textContent=wins;
}

