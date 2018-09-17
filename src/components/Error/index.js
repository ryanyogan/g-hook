import React from 'react';
import { string } from 'prop-types';

import './style.css';

const ErrorMessage = ({ error }) => (
  <div className="ErrorMessage">
    <small>{error.toString()}</small>
  </div>
);

ErrorMessage.propTypes = {
  error: string,
};

export default ErrorMessage;
