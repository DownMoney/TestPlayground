import {expect} from 'chai';
import {fromJS} from 'immutable';

import makeStore from '../src/store';
import {INITIAL_STATE} from '../src/core';

describe('store logic', () => {
   describe('makeStore', () => {
       it('should use a store to dispatch actions', () => {
           const store = makeStore();
           expect(store.getState()).to.equal(INITIAL_STATE);

           const movies = ['Movie 1', 'Movie 2'];

           store.dispatch({
               type: 'SET_ENTRIES',
               entries: movies
           });
           expect(store.getState()).to.equal(fromJS({
               entries: movies
           }));
       });
   });
});