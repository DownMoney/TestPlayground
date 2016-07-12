import React, { View, TextInput, StyleSheet } from 'react-native';
import {expect} from 'chai';
import { shallow } from 'enzyme';

import Vote from '../../src/components/Vote';

describe('Vote', () => {
    describe('UI', () => {
        it('should have a input field', () => {
            const wrapper = shallow(<Vote />);
            expect(wrapper.length).to.equal(1);
            expect(wrapper.contains(<TextInput></TextInput>)).to.equal(true);
        });
    });
});