import React from 'react';
import Context from '../../Context';
import './Creator.css';

const Creator = () => (
  <div className="creator">
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <input
            id="creatorInput"
            ref={(ip) => { this.myInp = ip; }}
            type="text"
            autoFocus
            placeholder="Create a notification!"
            value={context.state.input}
            onChange={(event) => { context.handleInputChange(event.target.value); }}
          />
          <button
            id="creatorButton"
            onClick={() => {
              context.addNotification();
              this.myInp.focus();
            }}
          >
            Add Notification
          </button>
        </React.Fragment>
      )}
    </Context.Consumer>
  </div>
);

export default Creator;
