import React from 'react-native';
import {expect} from 'chai';


import {setState, add, vote} from '../src/actions';


describe('Actions', () => {
    describe('Logic', () => {
        it('should have a setState function', () => {
            let state = {};

            const action = setState(state);

            expect(action).to.eqls({
                type: 'SET_STATE',
                state
            });
        });

        it('should have an add function', () => {
            let entry = 'test';

            const action = add(entry);

            expect(action).to.eqls({
                meta: {remote: true},
                type: 'ADD',
                entry
            });
        });

        it('should have a vote function', () => {
            let entry = 'test';

            const action = vote(entry);

            expect(action).to.eqls({
                meta: {remote: true},
                type: 'VOTE',
                entry
            });
        });

    });
});