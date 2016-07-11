import {Map, List} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function vote(state, entry) {
    const currentPair = state.getIn(['vote', 'pair']);
    const round = state.getIn(['vote', 'round'], 0);
    if (currentPair && currentPair.includes(entry)) {
        return state.merge(Map({
            'hasVoted': entry,
            'lastRound': round
        }));
    } else {
        return state;
    }
}

function resetVote(state) {
    const hasVoted = state.get('hasVoted');
    const round = state.getIn(['vote', 'round']);
    const lastRound = state.get('lastRound');
    console.log(state);

    console.log('Current round '+round);
    console.log('Voted in round '+lastRound);

    if (hasVoted && round > lastRound ) {
        console.log('Removing has voted');
        return state.remove('hasVoted');
    }
    else {
        console.log('NOT Removing has voted');

        return state;
    }
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return resetVote(setState(state, action.state));
        case 'VOTE':
            return vote(state, action.entry);
    }
    return state;
}