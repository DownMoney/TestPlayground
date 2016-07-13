import React, {
    TextInput,
    TouchableHighlight,
    Text
} from 'react-native';
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

        it('should have the add button', ()=>{
            const wrapper = shallow(<InputField />);
            expect(wrapper.length).to.equal(1);
            expect(wrapper.containsMatchingElement(<TouchableHighlight><Text>Add</Text></TouchableHighlight>)).to.equal(true);
        });
    });

    describe('Logic', () => {
        it('should submit the new option', () => {
            let votedFor = 'empty';
            const add = (entry) => votedFor = entry;
            
            const component = shallow(
                <InputField add={add} />
            );

            component.find('TouchableHighlight').simulate('press');

            expect(votedFor).to.equal('Placeholder');
        });
    });
});