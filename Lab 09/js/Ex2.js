function DisplayMessage(message){
    if(message === null) console.log('message is null');
    else if (message === '') console.log('message is empty');
    else console.log(message);
}

DisplayMessage(null);
DisplayMessage('');
DisplayMessage(false);
DisplayMessage('This is a test');
DisplayMessage('Pizza!');
DisplayMessage('and wings!');