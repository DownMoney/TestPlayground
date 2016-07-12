import React, {TextInput} from 'react-native';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import InputField from '../../src/components/InputField';

describe('Input Field', () => {
    describe('UI', () => {
        it('should have a input field', () => {
            const wrapper = shallow(<InputField />);
            expect(wrapper.length).to.equal(1);
            expect(wrapper.containsMatchingElement(<TextInput />)).to.equal(true);
        });
    });

    describe('Logic', () => {
        it('should submit the new option', () => {
            
        });
    });
});