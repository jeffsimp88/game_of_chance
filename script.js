let choices = ['Rock', 'Paper', 'Scissors']

function enemy(){
    let x =  Math.floor(Math.random()*3);     
    return choices[x]
}

let title = document.createElement("div");
function display(x){
    title.textContent = 'Your opponent chose ' + x +'! ';
    title.style.marginLeft = '15px';
    title.style.fontSize = '20px'
    title.style.fontFamily = "'Cinzel', serif";
    title.style.fontWeight = 'bold';
    document.getElementById('opponent').appendChild(title);
    
    }


function rock(){
    let result = ' '
    let a = enemy()
    if (a === 'Scissors'){
        result = 'YOU WIN'
    } else if (a ==='Paper'){
        result = 'YOU LOSE'
    } else {
        result = 'IT\'S A TIE'
    }    
    display(a)
    return result
}

function paper(){
    let result = ' '
    let a = enemy()
    if (a === 'Rock'){
        result = 'YOU WIN'
    } else if (a ==='Scissors'){
        result = 'YOU LOSE'
    } else {
        result = 'IT\'S A TIE'
    }
    display(a)
    return result
}

function scissors(){
    let result = ' '
    let a = enemy()
    if (a === 'Paper'){
        result = 'YOU WIN'
    } else if (a ==='Rock'){
        result = 'YOU LOSE'
    } else {
        result = 'IT\'S A TIE'
    }
    display(a)
    return result
}


let ballOptions = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it.", "Yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy.", "Try Again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]

function magicBall(){
    let x =  Math.floor(Math.random()*22);     
    return ballOptions[x]
}