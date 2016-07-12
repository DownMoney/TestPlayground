import {setEntries, vote, next, reset, add, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type){
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'VOTE':
            return vote(state, action.entry, action.meta.userID);
        case 'NEXT':
            return next(state);
        case 'RESET':
            return reset(state);
        case 'ADD':
            return add(state, action.entry)

        default:
            return state;
    }

}