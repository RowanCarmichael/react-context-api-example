import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const Notification = ({ text, time }) => (
  <div className="notificationAnimation">
    <div className="notification">
      <p className="notificationText">{text}</p>
      <p className="notificationTime">@{time}</p>
    </div>
  </div>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Notification;
