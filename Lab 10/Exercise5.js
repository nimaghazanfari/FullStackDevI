const findingNemo = str => {

    var idx = str.split(' ').findIndex(a => a.toLowerCase() == 'nemo');

    if(idx > -1) console.log(`I found Nemo at ${idx + 1}`);
    else console.log('I can\'t find Nemo :(');
}


findingNemo('I am finding Nemo !');
findingNemo('Nemo is me');
findingNemo('I Nemo am');
findingNemo('Finding Dory');
