import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import { Provider } from './Context';

chai.use(chaiEnzyme());

describe('Context Provider', () => {
  let wrapper;
  afterEach(() => {
    wrapper.unmount();
  });

  describe('addNotification', () => {
    it('resets input if input is not empty', () => {
      wrapper = shallow(<Provider><div /></Provider>);
      wrapper.setState({ input: 'Hello World' });

      wrapper.instance().addNotification();
      expect(wrapper.state().input).to.equal('');
    });

    it('adds a new object with input as text to the back of the notifications list', () => {
      wrapper = shallow(<Provider><div /></Provider>);
      wrapper.setState({
        input: 'Hello World',
        notifications: [
          { text: 'First' },
          { text: 'Second' },
        ],
      });

      wrapper.instance().addNotification();
      const notifications = [...wrapper.state().notifications];
      expect(notifications[notifications.length - 1].text).to.equal('Hello World');
    });
  });

  describe('Context', () => {
    it('provides value prop with current state', () => {
      wrapper = shallow(<Provider><div /></Provider>);
      const state = {
        input: 'Hello World',
        notifications: [],
      };
      wrapper.setState(state);

      expect(wrapper.props().value.state).to.deep.equal(state);
    });

    it('provides value prop with handleInputKeyPress function', () => {
      wrapper = shallow(<Provider><div /></Provider>);

      expect(wrapper.props().value.handleInputKeyPress).to.equal(wrapper.instance().handleInputKeyPress);
    });

    it('provides value prop with handleInputChange function', () => {
      wrapper = shallow(<Provider><div /></Provider>);

      expect(wrapper.props().value.handleInputChange).to.equal(wrapper.instance().handleInputChange);
    });

    it('provides value prop with addNotification function', () => {
      wrapper = shallow(<Provider><div /></Provider>);

      expect(wrapper.props().value.addNotification).to.equal(wrapper.instance().addNotification);
    });
  });
});
