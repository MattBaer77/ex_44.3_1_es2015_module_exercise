
import React from 'react';

const choice = (items) => {

    const rand = Math.floor(Math.random() * items.length);
    return items[rand]

}

const remove = (items, item) => {

    const indexOfItem = items.indexOf(item)

    if (indexOfItem === -1) {return undefined}

    return items.splice(indexOfItem, 1);
}

export {choice, remove}