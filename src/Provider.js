import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Context from './Context';

class Provider extends Component {
  state = {
    input: '',
    notifications: [],
  }

  handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addNotification();
    }
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  addNotification = () => {
    if (this.state.input.length > 0) {
      this.setState(prevState => ({
        notifications: [...prevState.notifications, { text: prevState.input, time: moment().format('DD MMM h:mm:ssa') }],
        input: '',
      }));
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleInputKeyPress: this.handleInputKeyPress,
          handleInputChange: this.handleInputChange,
          addNotification: this.addNotification,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
