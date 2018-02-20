// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
drivers.push(name);
}
function destructivelyPrependDriver (name){
drivers.unshift(name);
}

function destructivelyRemoveLastDriver (){
drivers.pop();
}

function destructivelyRemoveFirstDriver(){
drivers.shift();
}

function appendDriver(name){
drivers.splice(2,0, name);
}

function prependDriver(name){
drivers.splice(0,0, name);
}

function removeLastDriver(){
drivers.splice(2,1);
}

function removeFirstDriver(){
drivers.splice(0,1);
}
