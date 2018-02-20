// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
drivers.push('Ralph')
}
function destructivelyPrependDriver(name){}
drivers.unshift('Ralph')
}
function destructivelyRemoveLastDriver(){
drivers.pop
}
function destructivelyRemoveFirstDriver(){
drivers.shift
}
function appendDriver(name){
drivers.splice(2,0 'Raplh')
}

function prependDriver(name){
drivers.splice(0,0, 'Ralph')
}

function removeLastDriver(){
drivers.splice(2,1)
}

function removeFirstDriver(){
drivers.splice(0,1)
}
