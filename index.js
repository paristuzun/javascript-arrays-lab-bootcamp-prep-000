// Add your functions and code here
function destructivelyAppendKitten(name) {
   kittens.push(name);
   return kittens
}

function destructivelyPrependKitten(name) {
   kittens.unshift(name);
   return kittens
}

function destructivelyRemoveLastKitten(name) {
   kittens.pop(name);
   return kittens
}

function destructivelyRemoveFirstKitten(name) {
   kittens.shift(name);
   return kittens
}

function appendKitten(name) {
   return [...kittens, name]
}

function prependKitten(name) {
   return [name, ...kittens]
}

// passed


function removeLastKitten() {
   kittens.slice(-2)
   return kittens
  
}

function removeFirstKitten() {
   return kittens.slice(1)

  
}



