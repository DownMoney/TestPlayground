export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function add(entry) {
    return {
        meta: {remote: true},
        type: 'ADD',
        entry
    };
}

export function vote(entry){
    return {};
}