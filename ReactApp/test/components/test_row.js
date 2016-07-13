import React, {
    ListView,
    TouchableHighlight,
    Text
} from 'react-native';
import {expect} from 'chai';
import {shallow} from 'enzyme';


import Row from '../../src/components/Row';


describe('Row', () => {
    describe('UI', () => {

    });

    describe('Logic', () => {
        it('should submit a vote', () => {
            let votedFor = 'empty';
            const vote = (entry) => votedFor = entry;

            let voteTest = 'Vote';

            const component = shallow(
                <Row name={voteTest} vote={vote} />
            );

            component.find('TouchableHighlight').simulate('press');

            expect(votedFor).to.equal(voteTest);
        });
    });
});