let choices = ['Rock', 'Paper', 'Scissors']

function enemy(){
    let x =  Math.floor(Math.random()*3);     
    return choices[x]
}

function display(x){
    let title = document.createElement("div");
    title.textContent = x;
    document.body.appendChild(title)
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
