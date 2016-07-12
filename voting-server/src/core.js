import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

let firstState = Map();

export function setEntries(state, entries) {
    firstState = state.set('entries', List(entries));
    return firstState;
}

function getWinners(vote) {
    if (!vote) {
        return [];
    }

    const [a, b] = vote.get('pair');

    const aVotes = vote.getIn(['tally', a], 0);
    const bVotes = vote.getIn(['tally', b], 0);

    if (aVotes > bVotes) {
        return [a];
    }
    else if (aVotes < bVotes) {
        return [b];
    }
    else {
        return [a, b];
    }
}

export function next(state) {
    const winners = getWinners(state.get('vote'));
    const entries = state.get('entries').concat(winners);

    if (entries.size == 1) {
        return state.remove('vote')
            .remove('entries')
            .set('winner', entries.first());
    }

    const round = state.getIn(['vote', 'round'], 0) + 1;

    return state.merge({
        vote: Map({
            pair: entries.take(2),
            round: round
        }),
        voted: List(),
        entries: entries.skip(2)
    });
}

export function vote(state, name, userID) {
    var canVote = true;

    if (state.has('voted')) {
        canVote = !(state.get('voted').includes(userID));
    }

    if (state.getIn(['vote', 'pair']).includes(name) && canVote) {
        return state.updateIn(['vote', 'tally', name], 0, tally => tally + 1).merge(Map({
            voted: state.get('voted').concat(userID)
        }));
    }
    else {
        return state;
    }
}

export function add(state, entry) {
    console.log(entry);
    return state.merge(Map({
        entries: state.get('entries').concat(entry.name)
    }));
}

export function reset(state) {
    return next(firstState);
}