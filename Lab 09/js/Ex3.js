function DisplayMessage(message){
    if(message === null) console.log('message is null');
    else if (message === '') console.log('message is empty');
    else console.log(message);
}

function promptUser(message){
    return window.prompt(message);
}

DisplayMessage(promptUser('Enter a message to display:'));