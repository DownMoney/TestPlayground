export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function vote(entry, userID) {
    return {
        meta: {
            remote: true,
            userID: userID
        },
        type: 'VOTE',
        entry
    };
}

export function next() {
    return {
        meta: {remote: true},
        type: 'NEXT'
    };
}

export function reset() {
    return {
        meta: {remote: true},
        type: 'RESET'
    };
}