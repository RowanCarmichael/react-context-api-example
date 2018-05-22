import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Context from './Context';

class Provider extends Component {
  state = {
    input: '',
    notifications: [],
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleInputChange: (input) => { this.setState({ input }); },
          addNotification: () => {
            this.setState(prevState => ({
              notifications: [...prevState.notifications, { text: prevState.input, time: moment().format('DD MMM h:mm:ssa') }],
              input: '',
            }));
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Provider;
