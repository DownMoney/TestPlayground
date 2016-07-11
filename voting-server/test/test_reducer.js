import {expect} from 'chai';

import {Map, List} from 'immutable';

import reducer from '../src/reducer';

describe('reducer logic', () => {
    describe('reducer', ()=> {

        it('should handle SET ENTRIES', () => {
            const state = Map();

            const movies = ['Movie 1', 'Movie 2', 'Movie 3']

            const action = {
                type: 'SET_ENTRIES',
                entries: movies
            };


            const nextState = reducer(state, action);

            expect(nextState).to.equal(Map({
                entries: List(movies)
            }));
        });

        it('should handle VOTE', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2')
                }),
                entries: List()
            });

            const action = {
                type: 'VOTE',
                entry: 'Movie 1'
            };

            const nextState = reducer(state, action);

            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 1
                    })
                }),
                entries: List()
            }));

        });

        it('should handle NEXT', () => {
            const movies = List.of('Movie 1', 'Movie 2', 'Movie 3');

            const state = Map({
                entries: movies
            });

            const action = {
                type: 'NEXT'
            };

            const nextState = reducer(state, action);

            expect(state).to.equal(Map({
                entries: movies
            }));

            expect(nextState).to.equal(Map({
                entries: movies.skip(2),
                vote: Map({
                    pair: movies.take(2)
                })
            }));
        });

        it('has an initial state', () => {
            const action = {type: 'SET_ENTRIES', entries: ['Movie 1']};
            const nextState = reducer(undefined, action);
            expect(nextState).to.equal(Map({
                entries: List.of('Movie 1')
            }));
        });

        it('can be used with reduce', () => {
            const actions = [
                {type: 'SET_ENTRIES', entries: ['Movie 1', 'Movie 2']},
                {type: 'NEXT'},
                {type: 'VOTE', entry: 'Movie 1'},
                {type: 'VOTE', entry: 'Movie 2'},
                {type: 'VOTE', entry: 'Movie 1'},
                {type: 'NEXT'}
            ];
            const finalState = actions.reduce(reducer, Map());

            expect(finalState).to.equal(Map({
                winner: 'Movie 1'
            }));
        });

    });
});