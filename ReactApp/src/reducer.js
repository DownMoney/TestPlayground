import {Map, List} from 'immutable';


function setState(state, newState) {
    return state.merge(newState);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'VOTE':
            return vote(state, action.entry);
    }
    return state;
}