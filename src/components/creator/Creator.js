import React from 'react';
import Context from '../../Context';
import './Creator.css';
import Button from '../button/Button';
import TextInput from '../textInput/TextInput';

const Creator = () => (
  <div className="creator">
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <TextInput
            id="creatorInput"
            autoFocus
            focusOnBlur
            hint="Create a notification!"
            value={context.state.input}
            onChange={context.handleInputChange}
            onKeyPress={context.handleInputKeyPress}
          />
          <Button
            id="creatorButton"
            label="Add Notification"
            onClick={context.addNotification}
          />
        </React.Fragment>
      )}
    </Context.Consumer>
  </div>
);

export default Creator;
