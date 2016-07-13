import React, {
    ListView,
    TouchableHighlight,
    Text
} from 'react-native';
import {expect} from 'chai';
import {shallow} from 'enzyme';


import Options from '../../src/components/Options';


describe('Options', () => {
    describe('UI', () => {
        it('should have a list view', () => {
            const wrapper = shallow(<Options />);
            expect(wrapper.length).to.equal(1);
            expect(wrapper.containsMatchingElement(<ListView />)).to.equal(true);
        });
    });

    describe('Logic', () => {
        it('should load a list of options', () => {
            let entries = ['Opt 1', 'Opt 2', 'Opt 3'];

            const component = shallow(<Options entries={entries}/>);

            expect(component.find(ListView).props().dataSource._dataBlob.length).to.equal(entries.length);
        });
    });
});