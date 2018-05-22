import React from 'react';
import _ from 'lodash';
import Context from '../../Context';
import Notification from './Notification';
import './Notifications.css';

const Notifications = () => (
  <div className="notifications">
    <Context.Consumer>
      {context => (
        <React.Fragment>
          {_.map(context.state.notifications, notification => <Notification key={notification.text + notification.time} text={notification.text} time={notification.time} />)}
        </React.Fragment>
      )}
    </Context.Consumer>
  </div>
);

export default Notifications;
