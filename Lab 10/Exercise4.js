//Normal Functions
//Regular Expression at the end

const isUpperCaseChar = ch => {
    return ch && ch === ch.toUpperCase();
}

const isLowerCaseChar = ch => {
    return ch && ch === ch.toLowerCase();
}

const isPunc = ch => {
    return ch && (!isNaN(ch) || ch == ' ' || ch == '.' || ch == '!');
}

const findCase2 = str => {
    
    var upper = true;
    var lower = true;

    for(var ch of str){
        if(isPunc(ch)) continue;

        if(!isLowerCaseChar(ch)) lower = false;
        if(!isUpperCaseChar(ch)) upper = false;
    }

    if(upper) console.log('upper');
    if(lower) console.log('lower');
    if(!upper && !lower) console.log('mixed');

}

console.log('Using normal functions:');
findCase2('whisper...');
findCase2('SHOUT!');
findCase2('Quiet Voice');

//Regular Expression

const isUpperCase = str => {
    return /^[A-Z \d\W]+$/.test(str);
}

const isLowerCase = str => {
    return /^[a-z \d\W]+$/.test(str);
}

const findCase1 = str => {

    if(isLowerCase(str)) console.log('lower');
    else if(isUpperCase(str)) console.log('upper');
    else console.log('mixed');

}

console.log('Using Regex:');
findCase1('whisper...');
findCase1('SHOUT!');
findCase1('Quiet Voice');

