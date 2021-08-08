isBob(bob);

function isBob(bob) {
    bob ? console.log('bob is true.') : console.log('bob is false.');
}

var bob = 'bob';

isBob(bob);

bob => {bob?console.log('bob is true.'):console.log('bob is false.')}



a = () => { 
    b = () => { console.log(test)}
    var test = 'a'; 
    console.log(test); 
    b();
    
}
var test = 'c';
a();