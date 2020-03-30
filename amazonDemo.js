const inactive = 0;
const active =1;
function cellComplete(states, days) {
    var finalStates = [];
    var i=0;
    console.log(states);
    while(i < days) {
        for(var j=0; j< states.length; j++) {
            if((j === 0 && states[j+1] === inactive) ||
             (states[j-1] === states [j+1]) || 
             (j === states.length-1 && states[j-1] === inactive)){
                finalStates[j] = inactive;
            }
            else {
                finalStates [j] = active;
            }
        }
        console.log(finalStates);
        var newArray = finalStates.slice();
        states = newArray;
        i++;
    }
    return finalStates;
}

var array = [0,1,0,0]
cellComplete(array, 2);

var array = [];
var ar = '23 45';
array = array.concat(ar.split(' '));
console.log(array)