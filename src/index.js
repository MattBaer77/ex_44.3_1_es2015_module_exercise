
import React from 'react';
import foods from './foods'
import {choice, remove} from './helpers'

const randomFruit = choice(foods)
const removedFruit = remove(foods, randomFruit)

console.log(`I'd like one ${randomFruit} please`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious, May I have another?`)
console.log(`I am sorry, we are all out. We have ${foods.length} left`)