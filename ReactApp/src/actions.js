export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function add(entry) {
    console.log(entry);
    return {
        meta: {remote: true},
        type: 'ADD',
        entry
    }
}