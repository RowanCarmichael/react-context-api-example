import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const Notification = ({ text, time }) => (
  <div className="notification">
    <h1 className="notificationText">{text}</h1>
    <h1 className="notificationTime">@{time}</h1>
  </div>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Notification;
