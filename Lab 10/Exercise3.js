const starWarsRelations = name => {

    var relation;

    switch(name){
        case 'Darth Vader':
            relation = 'father';
            break;
        case 'Leia': 
            relation = 'sister';
            break;
        case 'R2D2': 
            relation = 'droid';
            break;
        default: break;
    }

    console.log(`Luke, I am your ${relation}.`);
}

starWarsRelations('Darth Vader');
starWarsRelations('Leia');
starWarsRelations('R2D2');