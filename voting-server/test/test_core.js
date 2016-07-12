import {expect} from 'chai';
import {List, Map} from 'immutable';

import {setEntries, next, vote} from '../src/core';

describe('app logic', () => {
    describe('setEntries', () => {

        it('adds new movies', () => {

            const state = Map();
            const movies = List.of('Movie 1', 'Movie 2');
            const nextState = setEntries(state, movies);

            expect(nextState).to.equal(Map({
                'entries': movies
            }));

        });

        it('converts to immutable', () => {
            const state = Map();
            const movies = ['Movie 1', 'Movie 2'];
            const nextState = setEntries(state, movies);
            expect(nextState).to.equal(Map({
                entries: List(movies)
            }));
        });

    });


    describe('next', () => {

        it('takes next 2 entries for the vote', () => {

            const movies = List.of('Movie 1', 'Movie 2', 'Movie 3');

            const state = Map({
                entries: movies
            });

            const nextState = next(state);

            expect(state).to.equal(Map({
                entries: movies
            }));

            expect(nextState).to.equal(Map({
                entries: movies.skip(2),
                vote: Map({
                    pair: movies.take(2),
                    round: 1
                }),
                voted: List()

            }));

        });

        it('adds the winner into the entry pool', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 5,
                        'Movie 2': 1
                    }),
                    round: 1
                }),
                entries: List.of('Movie 3', 'Movie 4', 'Movie 5')
            });

            const nextState = next(state);

            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 3', 'Movie 4'),
                    round: 2
                }),
                entries: List.of('Movie 5', 'Movie 1'),
                voted: List()

            }));

        });

        it('adds both entries if they are tied', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 5,
                        'Movie 2': 5
                    })
                }),
                entries: List.of('Movie 3', 'Movie 4', 'Movie 5')
            });

            const nextState = next(state);

            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 3', 'Movie 4'),
                    round: 1
                }),
                entries: List.of('Movie 5', 'Movie 1', 'Movie 2'),
                voted: List()
            }));
        });

        it('should finish the vote if there are no more entries',() => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 5,
                        'Movie 2': 1
                    })
                }),
                entries: List()
            });

            const nextState = next(state);

            expect(nextState).to.equal(Map({
                winner: 'Movie 1'
            }));
        });

    });

    describe('vote', () => {
        it('should add a tally for voted entry', () => {

            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2')
                }),
                entries: List(),
                voted: List()
            });

            const nextState = vote(state, 'Movie 1', 1);

            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 1
                    })
                }),
                entries: List(),
                voted: List.of(1)
            }));

        });

        it('should increment the existing tally', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 1
                    })
                }),
                entries: List(),
                voted: List()
            });

            const nextState = vote(state, 'Movie 1', 1);

            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 2
                    })
                }),
                entries: List(),
                voted: List.of(1)
            }));
        });

        it('should not allow voting for non existing entry', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2')
                }),
                entries: List()
            });

            const nextState = vote(state, 'Non existing movie');

            expect(nextState.getIn(['vote', 'tally', 'Non existing movie'])).to.equal(undefined);
        });

        it('should append the voted list on new vote', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2')
                }),
                entries: List(),
                voted: List()
            });

            const nextState = vote(state, 'Movie 1', 1);
            const nextState2 = vote(nextState, 'Movie 1', 2);

            expect(nextState2).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 2
                    })
                }),
                entries: List(),
                voted: List.of(1, 2)
            }));
        });


        it('should only allow one vote per user', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2')
                }),
                entries: List(),
                voted: List()
            });

            const nextState = vote(state, 'Movie 1', 1);
            const nextState2 = vote(nextState, 'Movie 1', 1);

            expect(nextState2).to.equal(Map({
                vote: Map({
                    pair: List.of('Movie 1', 'Movie 2'),
                    tally: Map({
                        'Movie 1': 1
                    })
                }),
                entries: List(),
                voted: List.of(1)
            }));
        });

    });

});
