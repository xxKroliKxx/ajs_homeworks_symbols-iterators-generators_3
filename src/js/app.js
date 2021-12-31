import Team from './Team';

function canIterate(obj) {
  if (typeof obj === 'object' && obj !== null) {
    return Symbol.iterator in obj;
  }
  return false;
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(new Team())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
